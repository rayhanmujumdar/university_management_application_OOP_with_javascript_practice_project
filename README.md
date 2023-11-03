# Javascript OPP simplified → Stack learner
**Date: 15/07/23**

[OOP Case studies](https://www.notion.so/OOP-Case-studies-17276005182046a98566802f1555278b?pvs=21)

## The disadvantage of procedural programming:

- code is not reusable
- large code base is hard to manage
- difficult to trace & fixing bugs
- Data is exposed to the whole program
- Here, the operation’s priority is higher the data
- difficult to relate with real-world data

### Class/object:

1. class → class is a template to create multiple object
    - class is a blueprint to create multiple object
2. object → object origented programming is all about object
    - Object inside  have the actual data → get data
    - or have public methods → operate data

### Class:

inside the class → 

- Component of a class
    - CONSTRUCTOR
    - STATE
    - METHODS
    - STATIC STATES
    - STATIC METHODS
- properties
    - public properties → not use necessarily
    - private properties → common use
- methods
    - private methods →  not use necessarily
    - public methods → common use

### OOP:

- Object is king in object-oriented programming
- Finding Objects, it’s Properties and Methods are the Main Mechanism of Learning object-oriented programming
- OPP has four Main piller
    - Abstraction
        - Abstraction Means Hiding the implementation details inside and providing just the necessary API. we never know how it is working, we only know what to do
    - Encapsulation
        - The definition of encapsulation is “the action of enclosing something in or as if in a capsule”.Encapsulation means that each object in your code should control its own state.state is the current “snapshot” of your object.
    - Inheritance
        - The ability of creating a new class from an existing class. inheritance is when an object acquires the property of another object.inheritance allows a class to acquire the properties and behavior of another class.
    - polymorphism
        - Polymorphism is derived from 2 greek words: poly and morphs.The word “Poly” means many and “morphs” means forms. Polymorphism means “many forms”
    - **polymorphism occurs two steps:**
        - Compile time
            - constructor overloading
            - operator overloading
            - function overloading
            - function overriding
        - Run time
            - virtual function
- There are two types of Relation in OOP
    - IS A Relation
        - Inheritance
            - **Inheritance** is the ability to create a new class from an existing class. **Inheritance** is when an object acquires the property of another object. **Inheritance allows a class to acquire the properties and behavior of another class**
    - Has a Relation
        - composition
        - aggregation
- UML Diagram is important for OOP. you need to know
    
    Create a UML Diagram:
    
    [SmartDraw is the Best Way to Make a Diagram](https://cloud.smartdraw.com/?nsu=1)
    

## Javascript OOP syntax  rules

1. Object, class, contractor function
2. property
3. method
4. private properties → javascript has no private properties. use ( _ ) after property name like _name
    - code example:
        
        ```jsx
        class Person {
          constructor(name, email) {
            this._name = name; // private properties 
            this._email = email; // private properties 
          }
          getName() {
            return this._name;
          }
          getEmail() {
            return this._email;
          }
        
          setName(name) {
            this._name = name;
          }
        
          setEmail(email) {
            this._email = email;
          }
        
          sendMail(msg) {
            console.log("To", this._email);
            console.log("MSG", this._sensitizeEmail(msg));
          }
          _sensitizeEmail(msg) { // private method
            return msg.trim().toLowerCase();
          }
          print() {
            console.log(this);
            return this;
          }
        }
        ```
        
5. getter, setter
    - code example:
        
        ```jsx
        class Person {
          constructor(name, email) {
            this._name = name;
            this._email = email;
          }
          get name() {
            // this is a function call
            console.log("calling");
            return this._name.toUpperCase();
          }
        
          set name(value) {
            if (value === "developer") return;
            this._name = value;
          }
          print() {
            console.log(this);
            return this;
          }
        }
        
        const p1 = new Person("Rayhan Mojumdar", "rayhanmujumdar0177@gmail.com");
        const p2 = new Person("sabbir", "sabbir11@gmail.com");
        
        p1.name = "developer"; // behind the scene setter function call
        console.log(p1.name); // behind the scene getter function call
        ```
        
6. toString override
    - code example:
        
        
        ```jsx
        class Person {
          constructor(name, email) {
            this._name = name;
            this._email = email;
          }
          print() {
            console.log(this);
            return this;
          }
          toString() {
            return `Name: ${this._name} , Email: ${this._email}`;
          }
        }
        
        const p1 = new Person("Rayhan Mojumdar", "rayhanmujumdar0177@gmail.com");
        const p2 = new Person("sabbir", "sabbir11@gmail.com");
        
        p1.print()
        console.log(p1 + ' ')
        ```
        
7. static properties  or method
    - code example:
        
        ```jsx
        class Person {
          static className = "PERSON";
          static PI = 3.1416;
          constructor(name, email) {
            this._name = name;
            this._email = email;
          }
          get name() {
            return this._name;
          }
          get email() {
            return this._email;
          }
          print() {
            console.log(this);
            return this;
          }
          static isValid(age) {
            return age >= 18;
          }
          static equal(p1, p2) {
            if (p1.name !== p2.name) return false;
            if (p1.email !== p2.email) return false;
            return true;
          }
        }
        
        const p1 = new Person("Rayhan Mojumdar", "rayhanmujumdar0177@gmail.com");
        const p2 = new Person("sabbir", "sabbir11@gmail.com");
        const p3 = new Person("sabbir", "sabbir11@gmail.com");
        
        p1.print();
        
        const testUser = {
          name: "Test",
          email: "test@gmail.com",
          age: 15,
        };
        
        let p5 = null;
        console.log(p1.email);
        
        if (Person.isValid(testUser.age)) {
          p5 = new Person(testUser.name, testUser.email);
        }
        
        console.log(Person.equal(p2, p3));
        ```
        
8. inheritance
    - code example:
        
        ```jsx
        // must be every class have a separate file
        
        // person class
        class Person {
          static className = "PERSON";
          static PI = 3.1416;
          constructor(name, email) {
            this._name = name;
            this._email = email;
          }
          get name() {
            return this._name;
          }
          set name(value) {
            this._name = value;
          }
          get email() {
            return this._email;
          }
          set email(value) {
            this._email = value;
          }
          print() {
            console.log(this);
            return this;
          }
          static isValid(age) {
            return age >= 18;
          }
          static equal(p1, p2) {
            if (p1.name !== p2.name) return false;
            if (p1.email !== p2.email) return false;
            return true;
          }
        }
        
        module.exports = Person;
        
        //student class
        const Person = require('./Person')
        class Student extends Person {
          constructor(name,email,subject, fee) {
            super(name,email)
            this._subject = subject;
            this._fee = fee;
          }
          get subject() {
            return this._subject;
          }
          set subject(value) {
            this._subject = value;
          }
          get fee() {
            return this._fee;
          }
          set fee(value) {
            this.fee = value;
          }
          print(){
            super.print()
            console.log(`Subjects: ${this._subject},Fee: ${this._fee}`)
          }
          // if i can modify to string
          // toString() {}
        }
        
        module.exports = Student
        
        module.exports = Student
        
        //Teacher class
        const Person = require("./Person");
        class Teacher extends Person {
          constructor(name, email, subjects, salary) {
            super(name, email);
            this._subject = subjects;
            this._salary = salary;
          }
          get subjects() {
            return this._subjects;
          }
          get salary() {
            return this._salary;
          }
          set salary(value) {
            this._salary = value;
          }
          print(){
            super.print()
            console.log(`Subject: ${this._subject},salary: ${this._salary}`)
          }
        }
        
        module.exports = Teacher;
        
        // index.js
        const Person = require("./Person");
        const Teacher = require("./Teacher");
        const Student = require("./Student");
        
        const p = new Person("Rayhan", "rayhanmujumdar@gmail.com");
        const t = new Teacher("shegufa Taranjum", "shegufa@test.com",'computer fundamental',4000); //"shegufa Taranjum", "shegufa@test.com"
        const s = new Student("Rayhan", "rayhanmujumdar@gmail.com",'Science',300)
        
        console.log(p)
        console.log(t)
        ```
        

### **Questions:**

- What is an object?
    - combination of noun, adjective & verb
        - object properties call Noun/adjective → for example:
            
            
            | object key | object value |
            | --- | --- |
            | Name | Twinkle |
            | color | white |
            | eyes | blue |
            | age | 10 month |
        - object methods call verb → for example:
            - void eat()
            - void walk()
            - void sleep()
    - A capsule that can Encapsulate Data & Operations
    - Has some Private and public properties
    - Has some Functions Which is called Methods
    - is a custom data type
    - An Isolated Environment for Properties & Methods
