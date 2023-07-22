const { Guardian, Student } = require("./Person");
const { Contact, Address } = require("./Contact");
const { Department, Subject } = require("./University");
const guardian = new Guardian(1, "Foyzul korim", "business", 40000);
guardian.blood = "O+";

guardian.contact = new Contact({
  id: 1,
  email: "foyzul@gmail.com",
  phone: "01776464695",
});

guardian.contact.address = new Address({
  id: 1,
  roadNo: "12/10",
  city: "hajigonj",
  region: "Mokimabad",
  country: "bangladesh",
  postalCode: "3400",
});

/**
 * Student ID 1
 */

const student = new Student(1, "Rayhan Mojumdar", "ST011", guardian);
student.blood = "A+";
student.contact = new Contact({
  id: 1,
  email: "rayhanmujumdar0177@gmail.com",
  phone: "01408001747",
  address: student.guardian.contact.address,
});

/**
 * Department
 */

const department = new Department({
  id: 1,
  name: "SWE",
});

student.department = department;

department.subjects = [
  new Subject(1, "Computer Fundamentals", 4),
  new Subject(2, "Introduction to software engineering", 3),
  new Subject(3, "Software testing", 5),
];

const totalCredit = student.department.subjects.reduce((acc,cur) => {
    acc += cur.credit
    return acc
},0)

console.log(totalCredit)