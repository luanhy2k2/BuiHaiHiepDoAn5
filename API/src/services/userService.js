const userRepository = require('../repositories/userRepository')
const UserService = {
    Authenticate: (username, password, callback) => {
        userRepository.GetUserByAccount(username, password, (err, user) => {
            if (err) {
                callback(err, null);
            } else {
                if (user) {
                    const userData = {
                        maTaiKhoan: user.maTaiKhoan,
                        hoTen: user.hoTen,
                        taiKhoan: user.taiKhoan,
                        loaiQuyen: user.loaiQuyen,
                        email: user.email,
                        diaChi: user.diaChi,
                        sdt: user.sdt,
                        maNguoiDung: user.maNguoiDung
                    };
                    callback(null, userData);
                } else {
                    callback(null, null);
                }
            }
        });
    },
    CreateUser: (user, callback) => {
        userRepository.CreateUser(user, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = UserService;
