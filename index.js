
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