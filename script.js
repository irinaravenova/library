const theHobbit = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet");
const lotr = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet");
const lotr1 = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet");

const myLibrary = [lotr1, theHobbit, lotr];

let title = document.getElementById('#title');
let author = document.getElementById('#author');
let pages = document.getElementById('#pages');
let read = document.getElementById('#read');

function Book(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }

}

console.log(myLibrary);

function addBookToLibrary(newBookObject) {
    myLibrary.push(newBookObject);
    console.log(myLibrary);
  }

myLibrary.forEach((book) => {
    const booksList = document.getElementById("booksList");
    let listedBook = document.createElement('li');
    listedBook.innerHTML = `${book.title}, ${book.author}, ${book.pages} pages, ${book.read}`;
    booksList.appendChild(listedBook);
})
