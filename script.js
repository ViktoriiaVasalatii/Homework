function isEmpty(object) {
    return (!(Object.entries(obj).length)) ? console.log("Object is empty") : console.log("Object is ful of properties");
}
let person = {
    name: "Tom",
    age: 16,
};

isEmpty(person);

////////////////////////////////////////////////////////////////
let reason = [];

function hireNewEmployee(employee) {
    if (employee.age < 25) {
        reason.push(`your age is equal ${employee.age}`);
    } 
    if (employee.education !== "hight") {
        reason.push(`your education  ${employee.education}`);
    }
    if (employee.experience < 1) {
        reason.push(`your experience is equal ${employee.experience}`);
    }
    if (employee.age >= 25 && employee.education === "hight" && employee.experience >= 1) {
        console.log("You're Hired! Congrats!");
    } else {
        console.log(`Not hired: sorry we cannot hire you. Here is why: ${reason}`);
    }

}

let worker = {};
Object.defineProperty(worker, "age", {
    value: 26,
    writable: true,
    enumerable: true,
    configurable: true,
});
Object.defineProperty(worker, "education", {
    value: "hight",
    writable: true,
    enumerable: true,
    configurable: true,
});
Object.defineProperty(worker, "experience", {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true,
});
hireNewEmployee(worker);

