const jwt = require("../config/jwt");

const authenticate = (req, res, next) => {
    // Get the JWT token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
    }
    // Verify the token
    const decodedToken = jwt.verifyToken(token);
    if (!decodedToken) {
        return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
    }
    next();
};

module.exports = authenticate;

