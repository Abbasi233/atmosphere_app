const jwt = require('jsonwebtoken');
const db = require('../db/index.js');

const Auth = {
    /**
     * Verify Token
     * @param {object} req 
     * @param {object} res 
     * @param {object} next
     * @returns {object|void} response object 
     */
    async verifyToken(req, res, next) {
        console.log("VERIFY IS WORKING");
        let token = req.headers['x-access-token'] || req.headers['authorization']; 
        console.log("Token: " + token);
        try {
            // Express headers are auto converted to lowercase
            if (token.startsWith('Bearer ')) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            }

            if (!token) {
                return res.status(400).send({ 'message': 'Token is not provided' });
            }

            const decoded = await jwt.verify(token, process.env.SECRET);
            console.log("Decoded:");
            console.log(decoded);
            const text = 'SELECT * FROM users WHERE userid = $1';
            const { rows } = await db.query(text, [decoded.userId]);
            if (!rows[0]) {
                return res.status(400).send({ 'message': 'The token you provided is invalid' });
            }
            req.body.userid =  decoded.userId;
            req.user = { username: decoded.userId };
            next();
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

module.export = Auth;