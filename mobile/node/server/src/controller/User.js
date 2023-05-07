const moment = require('moment');
const db = require('../db/index.js');
const Helper = require('./Helper.js');

const User = {
    /**
     * Create A User
     * @param {object} req 
     * @param {object} res
     * @returns {object} reflection object 
     */
    async register(req, res) {
        if (!req.body.email || !req.body.password || !req.body.username) {
            return res.status(400).send({ 'message': 'Some values are missing' });
        }
        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(400).send({ 'message': 'Please enter a valid email address' });
        }
        const hashPassword = Helper.hashPassword(req.body.password);
        
        const createQuery = `INSERT INTO
        users(userid, email, username, password, created_at, updated_at, role)
        VALUES($1, $2, $3, $4, $5, $6, 'User')
        returning *`;
        const values = [
            "user-" +Helper.generateId(),
            req.body.email,
            req.body.username,
            hashPassword,
            moment(new Date()),
            moment(new Date())
        ];
        
        try {
            const { rows } = await db.query(createQuery, values);
            const token = Helper.generateToken(rows[0].userid);
            return res.status(200).send({ token });
        } catch (error) {
            if (error.routine === '_bt_check_unique') {
                return res.status(400).send({ 'message': 'Email or username already exist' })
            }
            return res.status(400).send(error);
        }
    },

    async getAll(req, res) {
        const findAllQuery = `SELECT * FROM users`;
        // const findAllQuery = `SELECT * FROM surveys where userid = $1`;
        try {
            const { rows, rowCount } = await db.query(findAllQuery);
            // const { rows, rowCount } = await db.query(findAllQuery, [req.user.username]);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    /**
     * Login
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object 
     */
    async login(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({ 'message': 'Some values are missing' });
        }
        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(400).send({ 'message': 'Please enter a valid email address' });
        }
        const text = 'SELECT * FROM users WHERE username = $1';
        try {
            const { rows } = await db.query(text, [req.body.username]);
            if (!rows[0]) {
                return res.status(400).send({ 'message': 'The credentials you provided is incorrect' });
            }
            if (!Helper.comparePassword(rows[0].password, req.body.password)) {
                return res.status(400).send({ 'message': 'The credentials you provided is incorrect' });
            }
            const token = Helper.generateToken(rows[0].userid);
            const username=rows[0].username;
            return res.status(200).send({token, email});
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    /**
     * Update A Questions
     * @param {object} req 
     * @param {object} res 
     * @returns {object} updated questions
     */
    async updatePhoto(req, res) {
        console.log(req.body);
        const updateOneQuery = `UPDATE users SET photo=$1 WHERE userid=$2 returning *`;
        try {
            const { rows } = await db.query(updateOneQuery, [req.body.photo, req.body.userid]);
            if (!rows[0]) {
                return res.status(400).send({ 'message': 'user not found' });
            }
            return res.status(200).send({'message' : 'Fotoğraf başarıyla güncellendi.'});
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    /**
     * Delete A User
     * @param {object} req 
     * @param {object} res 
     * @returns {void} return status code 204 
     */
    async delete(req, res) {
        const deleteQuery = 'DELETE FROM users WHERE userid=$1 returning *';
        try {
            const { rows } = await db.query(deleteQuery, [req.body.userid]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': 'user not found' });
            }
            return res.status(200).send({ 'message': 'deleted' });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /**
    * Check A User Exists
    * @param {object} req
    * @param {object} res
    * @returns {void} return status code 200
    */
     async getAll(req, res) {
        const findAllQuery = `SELECT * FROM users`;
        // const findAllQuery = `SELECT * FROM surveys where userid = $1`;
        try {
            const { rows, rowCount } = await db.query(findAllQuery);
            // const { rows, rowCount } = await db.query(findAllQuery, [req.user.username]);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async checkUser(req, res) {
        const text = `SELECT * FROM users WHERE email = $1`;
        try {
            db.query(text, [req.body.email]).then((rows, rowCount) => {
                return res.status(200).send({ rows, rowCount });
            }) 
        
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}

module.export = User;