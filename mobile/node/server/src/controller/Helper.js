const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Helper = {
    /**
     * Hash Password Method
     * @param {string} password
     * @returns {string} returns hashed password
     */
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    },
    /**
     * comparePassword
     * @param {string} hashPassword 
     * @param {string} password 
     * @returns {Boolean} return True or False
     */
    comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    },
    /**
     * isValidEmail helper method
     * @param {string} email
     * @returns {Boolean} True or False
     */
    isValidEmail(email) {
        return true;
    },
    /**
     * Gnerate Token
     * @param {string} id
     * @returns {string} token
     */
    generateToken(username) {
        const token = jwt.sign({
            userId: username
        },
            process.env.SECRET, { expiresIn: '7d' }
        );
        return token;
    },

    generateId() {
        let id = crypto.randomBytes(20).toString('hex');
        return id;
    }
}

module.export = Helper;