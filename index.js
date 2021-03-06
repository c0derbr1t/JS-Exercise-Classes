/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eat(edible){
    if (this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }
  poop(){
    this.stomach = [];
  }

  toString(){
    return `${this.name}, ${this.age}`;
  }
}

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, mpg){
    this.model = model;
    this.milesPerGallon = mpg;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons){
    this.tank = this.tank + gallons;
  }

  drive(dist){
    let used = dist / this.milesPerGallon;
    let left = this.tank - used;
    let max = this.tank * this.milesPerGallon;
    
    if (dist <= max){
      this.tank = left;
      this.odometer = dist;
    } else {
      this.tank = 0;
      this.odometer = max;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  constructor(args){
    this.name = args.name;
    this.age = args.age;
    this.location = args.location;
  }

  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
// STRETCH 2 - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.

let randomChange = Math.floor(Math.random() * 100) - 50;

class Instructor extends Lambdasian {
  constructor(args){
    super(args);
    this.specialty = args.specialty;
    this.favLanguage = args.favLanguage;
    this.catchPhrase = args.catchPhrase;
  }

  demo(subject){
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }

  changeGrade(student){
    let newGrade = student.grade + randomChange;
    if (newGrade > 100){
      student.grade = 100;
    } else if (newGrade < 0) {
      student.grade = 0;
    } else {
      student.grade = newGrade;
    }
    return `I just changed ${student.name}'s grade by ${randomChange} points. They now have ${student.grade}.`;
  }
}

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
// STRETCH 1 - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// STRETCH 3 - Add a graduate method to a student.
    // + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    // + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

let randomGrade = Math.floor(Math.random() * 101) + 1;

class Student extends Lambdasian {
  constructor(args){
    super(args);
    this.previousBackground = args.previousBackground;
    this.className = args.className;
    this.favSubjects = args.favSubjects;
    this.grade = randomGrade;
  }

  listSubjects(){
    let stringed = this.favSubjects.join(', ');
    return `Loving ${stringed}!`;
  }

  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate(){
    if (this.grade > 70){
      return `${this.name}, you are ready to graduate with ${this.grade}%!!!`;
    } else {
      let needed = 70 - this.grade;
      return `${this.name}, you're almost there! You only need ${needed}% more to graduate!`;
    }
  }
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
  constructor(args){
    super(args);
    this.gradClassName = args.gradClassName;
    this.favInstructor = args.favInstructor;
  }

  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject){
    return `${this.name} debugs${student.name}'s code on ${subject}`;
  }
}

//Used for testing:
/*
let student1 = new Student({
	name: 'Chrissy',
	age: 25,
	location: 'Kansas City',
	previousBackground: 'little',
	className: 'WEB26',
	favSubjects: ['HTML', 'CSS', 'JS']
});

let instructor1 = new Instructor({
	name: 'Mr. Roberts',
	age: 30,
	location: 'Portland',
	specialty: 'for-loops',
	favLanguage: 'JS',
	catchPhrase: 'You can\'t catch me!'
});

console.log(student1);
console.log(instructor1);
console.log(student1.speak());
console.log(student1.listSubjects());
console.log(student1.PRAssignment('LESS'));
console.log(student1.sprintChallenge('HTML'));
console.log(student1.graduate());
console.log(instructor1.speak());
console.log(instructor1.demo('JS'));
console.log(instructor1.grade(student1, 'React'));
console.log(instructor1.changeGrade(student1));
*/

/*
  STRETCH PROBLEM (no tests!)
  * - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
  * - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
  * - Add a graduate method to a student.
  *   + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  *   + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
