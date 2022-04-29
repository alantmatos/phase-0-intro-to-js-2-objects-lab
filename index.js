const employee ={ 
    name: "Sam", 
    streetAddress:"",
};


function updateEmployeeWithKeyAndValue(){
const employeesObject = { ...employee,streetAddress:"11 Broadway",};
return (employeesObject);
};

function destructivelyUpdateEmployeeWithKeyAndValue(){
employee.streetAddress = "12 Broadway";
return (employee);
};

function deleteFromEmployeeByKey(){
const newEmployee = { ...employee,};
delete newEmployee.name;
return (newEmployee);
};

function destructivelyDeleteFromEmployeeByKey(){
delete employee.name;
return (employee)
};