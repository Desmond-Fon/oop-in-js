class Book {
    constructor(title, author, ISBN, numCopies){
        title = this.title;
        author = this.author;
        ISBN = this.ISBN;
        numCopies= this.numCopies;
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