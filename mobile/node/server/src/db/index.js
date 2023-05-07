const  Pool  = require('pg-pool');
const dotenv = require('dotenv');

dotenv.config();

console.log(`Database is ${process.env.DATABASE_URL}`);
const pool = new Pool({
    database: 'atmosphere_app',
    user: 'postgres',
    password: '123',
    port: 5432,
    ssl: false,
    max: 20, // set pool max size to 20
    idleTimeoutMillis: 100000, // close idle clients after 1 second
    connectionTimeoutMillis: 100000, // return an error after 1 second if connection could not be established
    maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
  });

module.export = {
    /**
     * DB Query
     * @param {object} req
     * @param {object} res
     * @returns {object} object 
     */
    query(text, params) {
        return new Promise((resolve, reject) => {
            pool.query(text, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}