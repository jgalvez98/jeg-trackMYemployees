const inquirer = require('inquirer');

const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  viewEmployeesByManager,
  viewEmployeesByDepartment,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
  viewBudgetByDepartment
} = require('./queries');

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuChoice',
        message: 'Select an option:',
        choices: [
          'View departments',
          'View roles',
          'View employees',
          'Add department',
          'Add role',
          'Add employee',
          'Update employee role',
          'View employees by manager',
          'View employees by department',
          'Delete departments',
          'Delete roles',
          'Delete employees',
          'View total utilized budget of a department',
          'Exit'
        ]
      }
    ])
    .then((answers) => {
      switch (answers.menuChoice) {
        case 'View departments':
          viewDepartments();
          break;
        case 'View roles':
          viewRoles();
          break;
        case 'View employees':
          viewEmployees();
          break;
        case 'Add department':
          inquirer.prompt([
            {
              type: 'input',
              name: 'departmentName',
              message: 'Enter the name of the department:'
            }
          ]).then((answers) => {
            addDepartment(answers.departmentName);
          });
          break;
        case 'Add role':
          inquirer.prompt([
            {
              type: 'input',
              name: 'title',
              message: 'Enter the title of the role:'
            },
            {
              type: 'input',
              name: 'salary',
              message: 'Enter the salary for this role:'
            },
            {
              type: 'input',
              name: 'departmentId',
              message: 'Enter the department ID for this role:'
            }
          ]).then((answers) => {
            addRole(answers.title, answers.salary, answers.departmentId);
          });
          break;
        case 'Add employee':
          inquirer.prompt([
            {
              type: 'input',
              name: 'firstName',
              message: 'Enter the first name of the employee:'
            },
            {
              type: 'input',
              name: 'lastName',
              message: 'Enter the last name of the employee:'
            },
            {
              type: 'input',
              name: 'roleId',
              message: 'Enter the role ID for this employee:'
            },
            {
              type: 'input',
              name: 'managerId',
              message: 'Enter the manager ID for this employee (if applicable):'
            }
          ]).then((answers) => {
            addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId);
          });
          break;
        case 'Update employee role':
          inquirer.prompt([
            {
              type: 'input',
              name: 'employeeId',
              message: 'Enter the ID of the employee whose role you want to update:'
            },
            {
              type: 'input',
              name: 'newRoleId',
              message: 'Enter the new role ID for this employee:'
            }
          ]).then((answers) => {
            updateEmployeeRole(answers.employeeId, answers.newRoleId);
          });
          break;
        case 'View employees by manager':
          inquirer.prompt([
            {
              type: 'input',
              name: 'managerId',
              message: 'Enter the manager ID to view their employees:'
            }
          ]).then((answers) => {
            viewEmployeesByManager(answers.managerId);
          });
          break;
        case 'View employees by department':
          inquirer.prompt([
            {
              type: 'input',
              name: 'departmentId',
              message: 'Enter the department ID to view its employees:'
            }
          ]).then((answers) => {
            viewEmployeesByDepartment(answers.departmentId);
          });
          break;
        case 'Delete departments':
          inquirer.prompt([
            {
              type: 'input',
              name: 'departmentId',
              message: 'Enter the department ID to delete:'
            }
          ]).then((answers) => {
            deleteDepartment(answers.departmentId);
          });
          break;
        case 'Delete roles':
          inquirer.prompt([
            {
              type: 'input',
              name: 'roleId',
              message: 'Enter the role ID to delete:'
            }
          ]).then((answers) => {
            deleteRole(answers.roleId);
          });
          break;
        case 'Delete employees':
          inquirer.prompt([
            {
              type: 'input',
              name: 'employeeId',
              message: 'Enter the employee ID to delete:'
            }
          ]).then((answers) => {
            deleteEmployee(answers.employeeId);
          });
          break;
        case 'View total utilized budget of a department':
          inquirer.prompt([
            {
              type: 'input',
              name: 'departmentId',
              message: 'Enter the department ID to view its budget:'
            }
          ]).then((answers) => {
            viewBudgetByDepartment(answers.departmentId);
          });
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
      }
    });
}

mainMenu();