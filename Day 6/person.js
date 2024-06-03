// Write a “person” class to hold all the details.
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  details() {
    console.log(`name : ${this.name}`);
    console.log(`age : ${this.age}`);
    console.log(`gender : ${this.gender}`);
  }
}
let person = new Person("getciya", 20, "female");
let person1 = new Person("stalin", 20, "female");

console.log("details:");
person.details();
console.log("details:");
person1.details();
