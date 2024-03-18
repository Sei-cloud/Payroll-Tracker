// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let keepAdding = true;
  
  // Asiking to add employee from prompt.
  while (keepAdding) {
    let firstName = prompt("Enter first name: ")
    let lastName = prompt("Enter last name: ")
    let salary = prompt("Enter salary: ")
    
    // Makes sure salary is a number.
    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    }

    // Add employee info to an array.
    const employee = {
      firstName:firstName, 
      lastName:lastName, 
      salary: parseFloat(salary)
    }
    
    employeesArray.push(employee)
    keepAdding = confirm("Do you want to add another employee?")
  } 
  return employeesArray

}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Calculate the total salary
  console.log('empArray', employeesArray);
  let totalSalary =0;

  const totalEmp =  employeesArray.length;

  for (const item of employeesArray){
    totalSalary += item.salary
  }

  // Calculate the average salary
  const avr = totalSalary / totalEmp

  // Log the average salary
  console.log(`Average salary of our ${employeesArray.length} employee[s] is $${avr}`);


  
}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // Get the random employee
  const randomEmployee = employeesArray[randomIndex];
  // Log the random employee
  console.log('Our random drawing winner is', randomEmployee.firstName, randomEmployee.lastName);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
