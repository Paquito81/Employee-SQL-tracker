const mysql = require('mysql2');
const inquirer = require('inquirer');
// const db = require('./config/connection');
const consoleTable = require('console.table');
// const e = require('express');
const sql = require('mysql2');

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

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
                "Update Employee",
                "Add Employee",
                "Add Role",
                "View all Roles",
                "Add Department",
                "Update an employee role",
                'Exit'
            ],
        },
    ])
    .then((answers) => {
        if (answers.create === "View all Employees") {
            viewEmployees();
        
        } else if (answers.create === "View departments") {
            viewDepartments();

        } else if (answers.create === "View roles") {
            viewRoles();

        } else if (answers.create === "Update Employee") {

        } else if (answers.create === "Add Employee") {
            addEmployee();

        } else if (answers.create === "Add Roles") {
            addRole();

        } else if (answers.create === "View all Roles") {
            
        } else if (answers.create === "Add Department") {
            addDepartment();
        }
    });
};

//view all departments
function viewDepartments(){
    var depart = `SELECT * FROM department`;
      db.query(depart,(err, res) => {
          if (err) throw err;
        console.table(res);
        create();
      });    
};
//view all roles
function viewRoles(){
    var rol = `SELECT * FROM role`;
      db.query(rol,(err, res) => {
          if (err) throw err;
        console.table(res);
        create();
      });    
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

function addDepartment() {
    inquirer
    .prompt([{
        name: "name",
        type:"input",
        message: "name of the department you are adding."
    }])
};

function addRole() {
    inquirer
    .prompt([{
        name: "role",
        type: "input",
        message: "What is the name of the role?"
    },
    {
        name: "Salary",
        type: "input",
        message:"What will be the salary?"
    },
    {
        name: "department",
        type: "input",
        message: "Enter department id."
    }
    ])
};


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

app.use((req, res) => {
    res.status(404).end();
});



// app.get('api/employee', (req, res) => {
//     const sql = `SELECT * FROM employee`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({error: err.message});
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// db.query(`SELECT * FROM employee WHERE id = 1`, (err, row)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// app.get('/api/employee/:id', (req, res) => {
//     const sql = `SELECT * FROM employee WHERE id =?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) => {
//         if (err) {
//             res.status(400).json({error: err.message});
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });

// app.delete('/api/employee/:id', (req, res) => {
//     const sql = `DELETE FROM employee WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({error: res.message});

//         }else if (!result.affectedRows) {
//             res.json({
//                 message: 'Employee not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         }
//     });
// });

// app.post('/api/employee', ({ body }, res) => {
//     const errors = inputCheck(body, 'first_name', 'last_name', 'manager_id', 'role_id');
//     if (errors) {
//         res.status(400).json({error: errors});
//         return;
//     }
// });


// db.query(`DELETE * FROM employee WHERE id =?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);

//     }
//     console.log(result);

// });



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});

