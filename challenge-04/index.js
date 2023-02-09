class Book {
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get getAvailability(){
        this.numCopies === 0 ? console.log('out of stock') : this.numCopies < 10 ? console.log('low stock') : console.log('in stock'); 
    };
    
    sell(numSold = 1){
        numSold - this.numCopies
    };

    restock( numCopies = 5 ) {
        numCopies + this.numCopies
    };
}

class TechnicalBook extends Book {
    constructor(edition){
        super(title, author, ISBN, numCopies)
        this.edition = edition;
    }
    getEdition () {
        console.log(`Current version of this book is ${this.edition}`);
    };
}