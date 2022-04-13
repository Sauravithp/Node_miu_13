let books = [];

module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id,
            this.title = title,
            this.ISBN = ISBN,
            this.publishedDate = publishedDate,
            this.author = author
    }

    save() {
        console.log("inside book save")
        this.id = Math.floor(Math.random() * 100);
        books.push(this);
        console.log(this);
        return this;
    }

    static getById(id) {
        console.log("inside getById book.js")
        let index=books.findIndex(p=>p.id==id);
        console.log(index);
        if(index>=0){
            return books[index];
        }
        return Error("Book not found");
    }

    static getAll() {
        return books;
    }

    static delete(id) {
        console.log("inside delete book.js")
        let index=books.findIndex(p=>p.id==id);
        console.log(index);
        if(index>=0){
            books = books.filter(p => p.id != id);
            return books;
        } else {
            throw new Error('NOT Found');
        }
    }

    update() {
        const index = books.findIndex(p => p.id == this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

}