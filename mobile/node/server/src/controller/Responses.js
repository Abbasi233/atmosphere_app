const  moment = require('moment');
const  db = require('../db/index.js');
const  Helper = require('./Helper.js');

const Responses = {
    /**
     * Create A Responses
     * @param {object} req 
     * @param {object} res
     * @returns {object} responses object 
     */
    async save(req, res) {
        console.log(req.body.result)
        const saveQuery = `INSERT INTO
      application(id, tc, name, cv, city, tel, jobType, created_at, updated_at)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning *`;
        const values = [
            "job-" + Helper.generateId(),
            req.body.tc,
            req.body.name,
            req.body.cv,
            req.body.city,
            req.body.tel,
            req.body.jobType,
            moment(new Date()),
            moment(new Date()),
        ];

        try {
            const { rows } = await db.query(saveQuery, values);
            return res.status(200).send(rows[0]);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    },
    /**
     * Get One Response
     * @param {object} req 
     * @param {object} res 
     * @returns {object} responses array
     */
    async getAll(req, res) {
        const findAllQuery = 'SELECT * FROM application WHERE slug = $1';
        try {
            const { rows, rowCount } = await db.query(findAllQuery, [req.body.slug]);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async getAllresp(req, res) {
        const findAllQuery = `SELECT * FROM application`;
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
     * Get A application
     * @param {object} req 
     * @param {object} res
     * @returns {object} application object
     */
    async getOne(req, res) {
        const text = 'SELECT * FROM application where responseid =$1';
        try {
            const { rows } = await db.query(text, [req.body.id]);
            if (!rows[0]) {
                return res.status(200).send({'message':'no data'});
            }
            return res.status(200).send(rows[0]);
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    /**
     * Update A application
     * @param {object} req 
     * @param {object} res 
     * @returns {object} updated application
     */
    async update(req, res) {
        const findOneQuery = 'SELECT * FROM application where responder = $1 and slug =$2';
        const updateOneQuery = `UPDATE application
      SET fullresponse=$1, updated_at=$2 WHERE slug=$3 returning *`;
        try {
            const { rows } = await db.query(findOneQuery, [req.user.username, req.body.slug]);
            if (!rows[0]) {
                return res.status(200).send({ 'message': 'application not found' });
            }
            const values = [
                req.body.application || rows[0].fullresponse,
                moment(new Date()),
                req.body.slug
            ];
            const response = await db.query(updateOneQuery, values);
            return res.status(200).send(response.rows[0]);
        } catch (err) {
            return res.status(400).send(err);
        }
    },
    /**
     * Delete A Responses
     * @param {object} req 
     * @param {object} res 
     * @returns {void} return status code 204 
     */
    async delete(req, res) {
        const deleteQuery = 'DELETE FROM responses WHERE responseid = $1 returning *';
         try {
            const { rows } = await db.query(deleteQuery, [req.body.responseid]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': 'response not found' });
            }
            return res.status(200).send({ 'message': 'deleted' });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /* async delete(req, res) {
        const deleteQuery = 'DELETE FROM responses WHERE responder = $1 and slug =$2 returning *';
        try {
            const { rows } = await db.query(deleteQuery, [req.body.responder, req.user.username]);
            if (!rows[0]) {
                return res.status(200).send({ 'message': 'responses not found' });
            }
            return res.status(200).send({ 'message': 'deleted' });
        } catch (error) {
            return res.status(400).send(error);
        }
    } */
}

module.export = Responses;