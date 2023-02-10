class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get getAvailability() {
    this.numCopies === 0
      ? console.log("out of stock")
      : this.numCopies < 10
      ? console.log("low stock")
      : console.log("in stock");
  }

  sell(numSold = 1) {
    return numSold - this.numCopies;
  }

  restock(numCopy = 5) {
    return numCopy + this.numCopies;
  }
}

const bookOne = new Book("spider-man", "Musa", 2015, 9);

bookOne.getAvailability;
console.log(bookOne.sell(19));
console.log(bookOne.restock());
