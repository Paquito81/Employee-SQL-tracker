const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

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

app.use((req, res) => {
    res.status(404).end();
});

db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows);
});

app.get('api/employee', (req, res) => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

db.query(`SELECT * FROM employee WHERE id = 1`, (err, row)=> {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT * FROM employee WHERE id =?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

app.delete('/api/employee/:id', (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({error: res.message});

        }else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

app.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'manager_id', 'role_id');
    if (errors) {
        res.status(400).json({error: errors});
        return;
    }
});


db.query(`DELETE * FROM employee WHERE id =?`, 1, (err, result) => {
    if (err) {
        console.log(err);

    }
    console.log(result);

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});

