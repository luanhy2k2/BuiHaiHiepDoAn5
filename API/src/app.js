const express_1 = require("express");
const routes_1 = require("./routes/index");
const cors = require('cors');
const multer = (require("multer"));
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const app = express_1();
const PORT = 3000;
app.use(cors());
app.use(express_1.json());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "D:/DELL E7450/NodeJs&Angular_IPM/IPM_BanSach/IPM_Angular_UI/src/assets/img/book");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req, res) => {
    // Check if req.file is present
    if (!req.file) {
        return res.status(500).json({ error: "No file provided" });
    }
    const filename = req.file;
    res.status(200).json({ filename });
});

app.use('/api', routes_1);

const emailConfig = {
    service: 'gmail',
    auth: {
      user: 'luanhy2k2@gmail.com',
      pass: 'Luan@15092002',
    },
  };
  
  const jwtSecretKey = 'your_secret_key';
  
  app.post('/register', (req, res) => {
    // Lấy thông tin từ request
    const { email } = req.body.email;
  
    // Tạo mã xác thực
    const token = jwt.sign({ email }, jwtSecretKey, { expiresIn: '1h' });
  
    // Gửi email với mã xác thực
    sendEmail(email, token);
  
    res.json({ message: 'Verification email sent successfully.' });
  });
  
  // Hàm gửi email
  function sendEmail(email, token) {
    const transporter = nodemailer.createTransport(emailConfig);
  
    const mailOptions = {
      from: 'luan22hy@gmail.com',
      to: email,
      subject: 'Account Verification',
      text: `Click the following link to verify your account: http://localhost:3000/verify?token=${token}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
