const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function auth(req, res, next){
    try {
        const authToken = req.cookies.authToken;
        if(!authToken) throw new Error();
        const decryptedToken = jwt.verify(authToken, process.env.JWT_KEY);
        const foundUser = await User.findOne({_id: decryptedToken._id, 'tokens.token': authToken});
        if(!foundUser) {
            req.authPass = false;
        }
        req.authPass = true;
        next();
    } catch (e) {
        req.authPass = false;
        next();
    }
}

module.exports = auth;