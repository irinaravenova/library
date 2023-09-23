document.addEventListener("DOMContentLoaded", function(event) {

let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');

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
const lotr = new Book("LOTR", "JRR Tolkien", "25", "not read yet")
const lotr1 = new Book("LOTR 1", "JRR Tolkien", "25", "not read yet")
const lotr2 = new Book("LOTR 2", "JRR Tolkien", "25", "not read yet")

const myLibrary = [lotr1, theHobbit, lotr, lotr2]
console.log(myLibrary)



myLibrary.forEach((book) => {
    const booksList = document.getElementById("booksList");
    let listedBook = document.createElement('li');
    let deleteEntryBtn = document.createElement('button');
    deleteEntryBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';

    listedBook.innerHTML = `<p>${book.title}</p> 
                            <p>${book.author}</p> 
                            <p>${book.pages} pages</p> 
                            <p>${book.read}</p>`;

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
    newBook.innerHTML = `<p> ${newBookObject.title}</p> 
                        <p>${newBookObject.author}</p> 
                        <p>${newBookObject.pages} pages</p> 
                        <p>${readOrNot}</p>`;
    
    existingBooks.appendChild(newBook);
    favDialog.close();
    resetBookForm();
    console.log(myLibrary);

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
    console.log(newBookObject);
    return newBookObject;
  }
});