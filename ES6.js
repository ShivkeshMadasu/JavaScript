const printName = (name) => "Hi " + name;

console.log(printName("Shivkesh"));



const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}` ;

console.log(printBill("Shivkesh",2600));



const person = {
    name: "Noam Chomsky",
    age: 92
}

let {name,age} = person;
console.log(name);
console.log(age);