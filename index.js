// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '5450 bakersfield dr',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj, ...{ [key]: value}}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj}

    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee[key];

    return employee;
}
