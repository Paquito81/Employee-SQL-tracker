const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./config/connection');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

db.connect((err) => {
    if (err) throw err;

    create();
});

function create() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choices',
            choices: [
                "View all Employees",
                "View departments",
                "View roles",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update an employee role",
                'Exit'
            ]
        }
    ]);
};
//view all employees
function viewEmployees(){
    var employ = `SELECT * FROM employee`;
      db.query(employ,(err, res) => {
          if (err) throw err;
        console.table(res);
        create();
      });    
};
//view all departments
function viewDepartments()
db.query(`SELECT * FROM department`, function (err, data){
    if (err) throw err;
    console.table(res);
    create();
});
//view all roles
function viewRoles()
db.query(`SELECT * FROM role`, function (err, data){
    if (err) throw err;
    console.table(res);
    create();
});

function addEmployee() {
    inquirer
    .prompt([{
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?",
    },
    {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?",

    },
    {
        name: "role",
        type: "input",
        message: "What is the role of the employee?",


    },
    {
        name: "manager",
        type: "input",
        message: "Who is the manager?"
    }
   ])
}

function addRole()

function addDepartment()

app.use((req, res) => {
    res.status(404).end();
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

