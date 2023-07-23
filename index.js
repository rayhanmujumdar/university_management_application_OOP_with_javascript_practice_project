const { Guardian, Student, Teacher } = require("./Person");
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

const totalCredit = student.department.subjects.reduce((acc, cur) => {
  acc += cur.credit;
  return acc;
}, 0);

console.log("Total Credit", totalCredit);

/**
 * Teacher
 */

const dean = new Teacher(1, "faruk hossain", "EM12", department.subjects[0]);
dean.blood = "O+";
dean.contact = new Contact({
  id: 3,
  email: "faruk@gmail.com",
  phone: "01477584545",
});
dean.contact.address = new Address({
  id: 3,
  roadNo: "SD 10",
  city: "Hajigonj",
  region: "chandpur",
  country: "bangladesh",
  postalCode: "3600",
});
dean.department = department;
dean.salary = 40000;
department.dean = dean;

const teacher1 = new Teacher(2, "saiful mulla", "EM13", department.subjects[1]);
teacher1.blood = "A+";
teacher1.contact = new Contact({
  id: 3,
  email: "saiful@gmail.com",
  phone: "01477584545",
});
teacher1.contact.address = new Address({
  id: 3,
  roadNo: "SD 11",
  city: "Hajigonj",
  region: "bolakal",
  country: "bangladesh",
  postalCode: "3600",
});
teacher1.department = department;
teacher1.salary = 30000;
const teacher2 = new Teacher(3, "shadat gazi", "EM14", department.subjects[2]);
teacher2.blood = "A+";
teacher2.contact = new Contact({
  id: 3,
  email: "shadat@gmail.com",
  phone: "01477584545",
});
teacher2.contact.address = new Address({
  id: 3,
  roadNo: "SD 12",
  city: "Hajigonj",
  region: "chandpur",
  country: "bangladesh",
  postalCode: "3600",
});
teacher2.department = department;
teacher2.salary = 45000;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

student.department.teachers.forEach((teacher, index) => {
  console.log(
    `${index + 1}. Name: ${teacher.name}; Subject: ${teacher.subject.name}`
  );
});
guardian.addChild(student);

const teachersSalary = guardian.children[0].department.teachers.reduce(
  (acc, cur) => {
    acc += cur.salary;
    return acc;
  },
  0
);

console.log(teachersSalary);
let count = 0;

if (student.blood === "O+") count++;

if (guardian.blood === "O+") count++;

student.department.teachers.forEach((teacher) => {
  if (teacher.blood === "O+") count++;
});

console.log(count);

student.department.teachers.forEach((teacher, i, arr) => {
  if (teacher.contact.address.region.toLowerCase() === "chandpur") {
    console.log(`
      Teacher Name: ${teacher.name}
      Teacher region: ${teacher.contact.address.region}`);
  }
});

// je je teacher er sathe student er blood group match korbe tader ke student basay dawar korbe code diye implement koro.

let gotTeacher = []

guardian.children.forEach(child => {
  child.department.teachers.forEach(teacher => {
    if(teacher.blood === child.blood){
      gotTeacher.push(teacher)
    }
  })
})

// is guardian  rich?
let isRich = false

const totalSalary = gotTeacher.reduce((acc,cur) => {
  acc = acc + cur.salary
  return acc
},0)

if(guardian.income > (totalSalary / 2) ){
  isRich = true
}

if(isRich){
  console.log(`${guardian.name} is rich man`)
}else{
  console.log(`${guardian.name} is poor`)
}
