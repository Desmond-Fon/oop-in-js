class User {
  #username;
  #password;
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
}

const userOne = new User("Musa", "musaAhmad", 9);

console.log(userOne.username);
console.log(userOne.age);
