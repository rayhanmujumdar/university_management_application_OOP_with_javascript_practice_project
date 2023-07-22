const UniPerson = require("./UniPerson");
const _studentId = Symbol("student");
const _guardian = Symbol("guardian");
const _fee = Symbol("fee");
const _exams = Symbol("exams");
class Student extends UniPerson {
  constructor(id, name, studentId, guardian) {
    super(id, name);
    this[_studentId] = studentId;
    this[_guardian] = guardian;
    this[_fee] = null;
    this[_exams] = [];
  }
  get studentId() {
    return this[_studentId];
  }

  get guardian() {
    return this[_guardian];
  }

  get fee() {
    return this[_fee];
  }
  set fee(value) {
    this[_fee] = value;
  }

  get exams() {
    return this[_exams];
  }
  set exams(value) {
    this[_exams] = value;
  }
  addExam(exam) {
    this[_exams].push(exam);
  }
  toString() {
    return `${super.toString()}, StudentId: ${this[_studentId]}`
  }
}

module.exports = Student;
