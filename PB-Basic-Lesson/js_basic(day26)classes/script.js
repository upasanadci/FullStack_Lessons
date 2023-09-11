class DCISchool {
  constructor(teachers, students, currentModule) {
    this.teachers = teachers; // array
    this.students = students; // number
    this.currentModule = currentModule; // string
  }
  addTeacher(teachersName) {
    // push a new name inside the teachers array
    this.teachers.push(teachersName);
  }
  removeTeacher(nameToRemove) {
    // remove a specific teacher from the array
    this.teachers = this.teachers.filter((item) => item != nameToRemove); // return the names that are not equal to the name that I want to remove
  }
  addStudent() {
    this.students++; // increment students by 1 (this.student is the number of students)
  }
  removeStudent() {
    this.students--; // decrement students by 1
  }

  displayInfo() {
    console.log(
      `the class has ${this.students}. The current module is ${this.currentModule} and the teachers are ${this.teachers}`
    );
  }
}

const fbw11 = new DCISchool(["Vassilis", "Upasana"], 16, "JavaScript");
console.log(fbw11);

fbw11.addTeacher("Arif");

console.log(fbw11.teachers); //  [ 'Vassilis', 'Upasana', 'Arif' ]

fbw11.removeTeacher("Vassilis");

console.log(fbw11.teachers); // [ 'Upasana', 'Arif' ]

fbw11.displayInfo(); // the class has 16. The current module is JavaScript and the teachers are Upasana,Arif
fbw11.addStudent();
fbw11.displayInfo(); // the class has 17. The current module is JavaScript and the teachers are Upasana,Arif
fbw11.removeStudent();
fbw11.displayInfo(); // the class has 16. The current module is JavaScript and the teachers are Upasana,Arif
