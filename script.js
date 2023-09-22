document.addEventListener("DOMContentLoaded", function(event) {

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector(".confirmBtn");

showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

favDialog.addEventListener("close", (e) => {
    resetBookForm();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault() // We don't want to submit this fake form
    favDialog.close(); // Have to send the select box value here.
  });

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet")
const lotr = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet")
const lotr1 = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet")
const lotr2 = new Book("The Hobbit", "JRR Tolkien", "25", "not read yet")

const myLibrary = [lotr1, theHobbit, lotr, lotr2]
console.log(myLibrary)

let title = document.getElementById('title')
let author = document.getElementById('author')
let pages = document.getElementById('pages')
let read = document.getElementById('read')

myLibrary.forEach((book) => {
    const booksList = document.getElementById("booksList");
    let listedBook = document.createElement('li');
    let deleteEntryBtn = document.createElement('button');
    listedBook.innerHTML = `${book.title}, ${book.author}, ${book.pages} pages, ${book.read}`;
    booksList.appendChild(listedBook);
    listedBook.appendChild(deleteEntryBtn);
})

document.getElementById('submit').addEventListener("click", function(event) {
    event.preventDefault(); 
    let readOrNot;
    let newBookObject = addBookToLibrary(title, author, pages, read);
    if (newBookObject.read == true) {
        readOrNot = "Completed";
    }
    else {
        readOrNot = "Not Completed";
    }
    
    const existingBooks = document.getElementById("booksList");
    let newBook = document.createElement('li');
    newBook.innerHTML = `${newBookObject.title}, ${newBookObject.author}, ${newBookObject.pages} pages, ${readOrNot}`;
    
    existingBooks.appendChild(newBook);
    favDialog.close();
    resetBookForm();
    console.log(myLibrary)

})

function resetBookForm() {
    document.getElementById('addBookForm').reset();
}


function Book(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    
    const newBookObject = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBookObject);
    console.log(newBookObject)
    return newBookObject;
  }
});