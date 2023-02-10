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

class TechnicalBook extends Book {
  constructor(edition, title, author, ISBN, numCopies) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }
  get getEdition() {
    console.log(`Current version of this book is ${this.edition}`);
  }
}

const bookOne = new TechnicalBook(1000, "spider-man", "Musa", 2015, 9);

bookOne.getAvailability;
bookOne.getEdition;
