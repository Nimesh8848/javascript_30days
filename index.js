
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}

for (const key in user) {
  console.log(key, user[key])
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  for (const country of countries) {
    console.log(country.toUpperCase())
 }
// Creating an object with values
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     isStudent: false
//   };
  
//   // Accessing values
//   console.log("First Name:", person.firstName);
//   console.log("Last Name:", person.lastName);
//   console.log("Age:", person.age);
//   console.log("Is Student?", person.isStudent);
// const person={
//     firstname:"Nimesh",
//     lastname:"Mathema",
//     age:21,
//     getFullName:function(){
//         return `${this.firstname}${this.lastname}`
//     },
// }
// console.log(person.getFullName());

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js',
//     ],
//     getFullName: function () {
//       return `${this.firstName} ${this.lastName}`
//     },
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true
  
//   person.getPersonInfo = function () {
//     let skillsWithoutLastSkill = this.skills
//       .slice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.slice(this.skills.length - 1)[0]
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
      .slice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.slice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())

  function square(){
    let num=2;
    sq=num*num;
    console.log(sq);
  }
  square();
  function addtwonumbers(){
    a=10;
    b=20;
    sum=a+b;
    return sum;

  }
  console.log(addtwonumbers());

  function square(a){
    let area= a*a;
    return area;
  }
  console.log(square(5));

  function add(a,b){
    let sum=a+b;
    return sum;
  }
  console.log(add(10,30));

  function sumArray(arr){
    let sum=0;
    let i=0;
    for(i=0;i<arr.length;i++){
      sum=sum+arr[i];
    }
    return sum;
  }
  const num=[1,2,3,4,5];
  console.log(sumArray(num));

  const anonymous =function(){
    console.log('Hello');
  }

  // Function expression
const squa= function (n) {
  return n * n
}

console.log(squa(2));

// Callback function: squares the given number
const callback = (n) => {
  return n ** 2;
}

// Function that takes a callback and a number, and performs a calculation
function cube(callback, n) {
  return callback(n) * n;
}

// Call the cube function with the callback and a number (3)
console.log(cube(callback, 3));

function sayHello(){
  console.log('hello');
}
setInterval(sayHello,2000);

const countrie = ['Finland', 'Nepal', 'Sweden', 'Norway']

countrie.forEach(function (country, i, arr) {
  console.log(i, country.toUpperCase())
})
function printUser(user) {
  let access; // Declare the access variable outside of the if-else statement
  
  if (user.admin) {
    access = "ADMIN";
  } else {
    access = "user";
  }

  console.log(`Access level: ${access}`);
}

const numnbers =[1,2,3,4,5,6,7,8];
const even =numnbers.filter((numnbers)=>{
  return numnbers%2===0;
});
console.log(even);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 0
console.log(firstOddNum) // 1

const array = [10, 20, 30, 40, 50];

const index = array.findIndex(element => element === 40);

console.log(index); 

