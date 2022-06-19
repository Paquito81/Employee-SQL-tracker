const sql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        //mysql password
        password: process.env.DB_PW,
        database: 'tracker_employee'
    },
    console.log('Conected to the tracker_employee database')
);

module.exports = db;