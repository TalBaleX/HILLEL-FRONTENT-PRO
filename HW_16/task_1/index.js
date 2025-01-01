function Student(name, surname, birthDate, assessments = []) {
  this.appearance = new Array(25);
  this.number = 0;
  this.appearance.fill(0);
  this.name = name;
  this.surname = surname;
  this.birthDate = birthDate;
  this.assessments = assessments;
}

Student.prototype.getAge = function () {
  return new Date().getFullYear() - this.birthDate;
};

Student.prototype.getAverage = function () {
  return (
    this.assessments.reduce((sum, currentValue) => sum + currentValue, 0) /
    this.assessments.length
  );
};

Student.prototype.present = function () {
  if (this.number < 25) {
    this.appearance[this.number] = 1;
    this.number += 1;
  }
  return this;
};

Student.prototype.absent = function () {
  if (this.number < 25) {
    this.appearance[this.number] = 0;
    this.number += 1;
  }
  return this;
};

Student.prototype.summary = function () {
  let averageAppearance =
    this.appearance.reduce((sum, currentValue) => sum + currentValue, 0) /
    this.appearance.length;
  if (this.getAverage() > 90 && averageAppearance > 0.9) {
    return "Молодець!";
  } else if (this.getAverage() > 90 || averageAppearance > 0.9) {
    return "Добре, але можна краще";
  } else {
    return "Редиска!!!";
  }
};

const student1 = new Student("Yehor", "Trofimtsov", 2009, [100, 90, 100, 100]);
const student2 = new Student("Mefodii", "Surname", 1987, [30, 10, 20, 40]);
const student3 = new Student("Michael", "Schmidt", 1900, [100, 100, 100, 100]);

console.log(student1.name, student1.getAge());
console.log(student1.name, student1.getAverage());
student1
  .present()
  .absent()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present();
console.log(student1.name, student1.summary());

console.log(student2.name, student2.getAge());
console.log(student2.name, student2.getAverage());
student2.present();
console.log(student2.name, student2.summary());

console.log(student3.name, student3.getAge());
console.log(student3.name, student3.getAverage());
student3.absent();
console.log(student3.name, student3.summary());
