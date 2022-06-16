USE tracker_employee;

INSERT INTO department (department_name)
VALUES
('Human Resources'),
('Cardiac'),
('Radiology'),
('Respiratory'),
('Nursing'),
('Oncology')
('Telemetry');

INSERT INTO roles (title, salary, department_id)
VALUES
('Cardiac Nurse', 63000, 2),
('Radiology Technician', 64000, 3),
('Respiratory Technician', 60000, 4),
('Medsurge Nurse', 58000, 5),
('CNA', 40000, 5),
('Oncology Nurse', 62000, 6),
('Payroll Clerk' 70000, 1),
('Recruting Cordinator', 66000, 1);



INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES
('Jose', 'Saltamonte', null, 4),
('Jose', 'Rodriguez', null, 3),
('Fedrick', 'McKenny', 3, 3),
('David', 'Zabalda', 3, 4),
('Mateo', 'Andrade', 4, 2),
('Charles', 'Woolf', 2, 3),
('Summers', 'Whitenberg', 1, 1),
('Sarah', 'Anderson', 2, 4),
('William', 'Chopper', 4, 1);