const sql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        //mysql password
        password: 'Amoamimia3000',
        database: 'tracker_employee'
    },
    console.log('Conected to the tracker_employee database')
);

module.exports = connection;