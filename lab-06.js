class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
    deleteBook(isbn) {
        // find the book to remove
        //loop through books
        let indexOfBookToRemove = null;
        for (let index = 0; index <  this._books.length; index++) {
            if (this._books[index].isbn == isbn) {
                indexOfBookToRemove = index;
                break;
            }
        }
        //remove the book from the this._books
        this._books.splice(indexOfBookToRemove, 1);
    }
  }
  
// Create library object
const uolibrary = new Library("Knight Library");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "9781847941831");
const dareToLead = new Book ("Dare To Lead", "Brené Brown", "10/09/2018", "9781785042140");
const successIsAChoice = new Book("Success Is A Choice", "Rick Pitino", "11/27/1997", "9780553455878");

// Add book to library and output library count and books
uolibrary.addBook(atomicHabits);
uolibrary.addBook(dareToLead);
uolibrary.addBook(successIsAChoice);
console.log(`Book count: ${uolibrary.count}`);
console.log("* Library after delete *");
uolibrary.deleteBook("9780553455878");
uolibrary.listBooks();
