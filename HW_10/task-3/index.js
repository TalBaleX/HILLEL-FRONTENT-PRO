const book = {
  contacts: [
    {
      name: "Serhii",
      phone: "+380999999999",
      email: "example@email.com",
    },
  ],
  find: function (name) {
    for (const person of this.contacts) {
      if (person.name == name) {
        return person;
      }
    }
    return "нема такого :(";
  },
  add: function (name, phone, email) {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] == undefined) {
        arguments[i] = "";
      }
    }
    this.contacts.push({ name: name, phone: phone, email: email });
  },
};
book.add("Yehor", "+49 123 456789", "gmail@gmail.com");
book.add(undefined, "+49 123 456789", "gmail@gmail.com");
console.log(book.find("Yehor"));
console.log(book.find("Nazar"));
console.log(book);
