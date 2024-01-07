const userService = require("../services/userService");
const auth = require('../config/jwt')
const UserController = {
  authenticate: (req, res) => {
    const { username, password } = req.body;
    userService.Authenticate(username, password, (err, user) => {
      try {
        if (err) {
          console.error('Error authenticating user: ' + err.stack);
          return res.status(500).json({ message: 'Authentication error' });
        }
        if (user) {
          const token = auth.generateToken(user); // Assuming generateToken is a function available in your code.
          user.token = token;
          res.json(user);
        } else {
          res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });
  },

  CreateUser: (req, res) => {
    const User = req.body;
    userService.CreateUser(User, (err) => {
      try {
        if (err) {
          console.error('Error creating user: ' + err.stack);
          return res.status(500).json({ message: 'User creation error' });
        }
        res.json({ message: 'Thêm thành công', data: true });
      } catch (err) {
        res.json({ message: err.message });
      }
    });
  },
};

module.exports = UserController;
