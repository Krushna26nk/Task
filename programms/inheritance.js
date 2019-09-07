function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};


function Magzine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}

// Inherit Prototype
Magzine.prototype = Object.create(Book.prototype);

// instatiate Magzine Object

const mag = new Magzine('Magzine 1','J.K.Rowling','2015','Jan');
console.log(mag.getSummary());