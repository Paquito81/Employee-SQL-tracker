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

app.get('/', (req, res) => {
    res.json({
        message: 'Hello homie'
    });
});
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});

