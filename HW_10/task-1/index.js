function User(name, surname, age, location) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.location = location;
}

User.prototype.getInfo = function () {
  return {
    name: this.name,
    surname: this.surname,
    age: this.age,
    location: this.location,
  };
};

const user = new User("Egor", "Trofimtsov", 15, "Leipzig");
