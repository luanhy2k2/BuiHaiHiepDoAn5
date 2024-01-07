const jwt = require("jsonwebtoken");
const { config } = require("./config");

const generateToken = (payload) => {
    return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwt.secret);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken,
};
