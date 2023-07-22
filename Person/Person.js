const _id = Symbol("id");
const _name = Symbol("name");
const _blood = Symbol("blood");
const _contact = Symbol("contact");

class Person {
  constructor(id, name) {
    this[_id] = id;
    this[_name] = name;
    this[_blood] = null;
    this[_contact] = null;
  }

  get id() {
    return this[_id];
  }
  get name() {
    return this[_name];
  }
  get blood() {
    return this[_blood];
  }
  set blood(value) {
    const bloodGroup = ["O+", "A+", "A-", "B+", "B-", "O-"];
    if (bloodGroup.includes(value.toUpperCase())) {
      this[_blood] = value.toUpperCase();
    }
  }
  get contact() {
    return this[_contact];
  }

  set name(value) {
    this[_name] = value;
  }

  set contact(value) {
    this[_contact] = value;
  }

  toString() {
    return `
    id: ${this.id} , 
    Name: ${this.name}
    Contact: ${this.contact}
    `;
  }
}

module.exports = Person;
