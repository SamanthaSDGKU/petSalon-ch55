console.log("Welcome to FSDI 104");

// Global variables
let globalVariable = "I am a global variable";

function exampleFunction(){
  // Local variable
  let localVariable = "I am a local variable";
  
  console.log(globalVariable);
  console.log(localVariable);
}

exampleFunction();

console.log(globalVariable);
//console.log(localVariable); 

// ARRAYS
let fruits = ["apple", "bannana", "orange"];
console.log(`This is an array: ${fruits}`);

console.log(fruits[1]); //bannana
console.log(fruits[2]); //orange
console.log(fruits[0]); //apple

fruits[1] = "cherry";
console.log(fruits);

// Array length
console.log(fruits.length); // output 3

// ADDING AND REMOVING ELEMENTS
fruits.push("watermelon"); //adding to the end
console.log(fruits);

fruits.pop(); //removing from the end
fruits.pop(); //removing from the end
console.log(fruits);

fruits.unshift("grape"); // adding to the beginning
console.log(fruits);
 
fruits.shift(); // removing from the beginning
console.log(fruits);

// CHALLENGE 1 using arrays
/*
  1. Create an array of student names
  2. Use a for loop to iterate through the array
  3. Log each student's name
*/
let students = ["Cassius", "Robert", "James", "Gabriel", "Edward"];

for(let i = 0; i<students.length; i++){
  console.log(students[i]);
}

console.log("====== OBJECTS ======")

/* OBJECTS
An object is a collection of key-value pairs. 
it allows you to group related data together in a structure way

let objectName={
  key1: value1,
  key2: value2,
  key3: value3
}

*/

let person = {
  name: "Michael",
  lastName: "Scott",
  age: 40,
  isStudent: false
}

//access the properties of  an object
console.log(`The person name is ${person.name}`); 
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);

// Example 2
let student1={
  name: "Leo",
  email: "lmiranda@sdgku.edu",
  age: 80,
  address: "742 evergreen terrace springfield, USA"
}

let student2={
  name: "pam",
  email: "pam1@gmail.com",
  age: 20,
  address: "123 Maple Street, Apartment 4B"
}

let student3={
  name: "bruce",
  email: "bru_ce@gmail.com",
  age: 50,
  address: "123 Maple Street, Apartment 4B"
}

let student4={
  name: "peter",
  email: "iampeter@gmail.com",
  age: 70,
  address: "742 evergreen terrace springfield, USA"
}


let studentList = [student1, student2, student3, student4];
console.log("student list: ", studentList.length);

document.getElementById("studentsCounter").innerHTML =`We have ${studentList.length} students`;

console.log(`email: ${studentList[1].email}, adress: ${studentList[1].address}`); 

function getStudentName(){
  let list = document.getElementById("studentNames");

  for(let i=0; i<studentList.length; i++){
    console.log(studentList[i].name); 

    list.innerHTML += `<li>${studentList[i].name} </li>`
  }
}

getStudentName();