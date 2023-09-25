document.addEventListener("DOMContentLoaded", function(event) {

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "25", false)
const lotr = new Book("Lord of the Rings", "JRR Tolkien", "25", false)
const lotr1 = new Book("LOTR 1", "JRR Tolkien", "25", false)
const lotr2 = new Book("LOTR 2", "JRR Tolkien", "25", false)

let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector(".confirmBtn");

const myLibrary = [lotr];
emptyCheck();
console.log(myLibrary)


// Displays empty library message if no books in myLibrary array.
function emptyCheck() {
    if (myLibrary.length === 0) { 
        let a123 = document.getElementsByClassName('library-empty-msg');
        a123[0].innerText = "Your library is empty!"
        console.log(a123[0].innerText)
     }
     else if (myLibrary.length == 1) {
        let a123 = document.getElementsByClassName('library-empty-msg');
        a123[0].remove();
        return;
    }
    else {
        return;
    }
}

for (let book = 0; book < myLibrary.length; book++) {
    const booksList = document.getElementById("booksList");
    let listedBook = document.createElement('li');
    let deleteEntryBtn = document.createElement('button');
    deleteEntryBtn.className = "delete-entry-button";
    let readStatus = "";
    if (book.read == false) {
        readStatus = "Not Completed";
    }
    else {
        readStatus = "Completed";
    }
    listedBook.innerHTML = `<p>${book.title}</p> 
                            <p>${book.author}</p> 
                            <p>${book.pages} pages</p> 
                            <p>${readStatus}</p>`;
    deleteEntryBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    

    listedBook.dataset.id=`${book}`;
    console.log(listedBook.dataset.id);
    
    booksList.appendChild(listedBook);
    listedBook.appendChild(deleteEntryBtn);
}

// Displays each book in myLibrary array.
// myLibrary.forEach((book) => {
//     const booksList = document.getElementById("booksList");
//     let listedBook = document.createElement('li');
//     let deleteEntryBtn = document.createElement('button');
//     deleteEntryBtn.className = "delete-entry-button";
//     let readStatus = "";
//     if (book.read == false) {
//         readStatus = "Not Completed";
//     }
//     else {
//         readStatus = "Completed";
//     }
//     listedBook.innerHTML = `<p>${book.title}</p> 
//                             <p>${book.author}</p> 
//                             <p>${book.pages} pages</p> 
//                             <p>${readStatus}</p>`;
//     deleteEntryBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    

//     listedBook.dataset.id=`${Number(myLibrary[0])}`;
//     console.log(listedBook.dataset.id);
    
//     booksList.appendChild(listedBook);
//     listedBook.appendChild(deleteEntryBtn);
// })


// Button event listeners.
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



// Adds new book function to myLibrary array.
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
    let deleteEntryBtn = document.createElement('button');
    deleteEntryBtn.className = "delete-entry-button";
    newBook.innerHTML = `<p> ${newBookObject.title}</p> 
                        <p>${newBookObject.author}</p> 
                        <p>${newBookObject.pages} pages</p> 
                        <p>${readOrNot}</p>`;

    deleteEntryBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';    
    existingBooks.appendChild(newBook);
    newBook.appendChild(deleteEntryBtn);
    favDialog.close();
    resetBookForm();

    newBook.dataset.id=`${myLibrary.length-1}`;
    console.log(newBook.dataset.id);

    emptyCheck();
})


// Function that resets the input values of the book form.
function resetBookForm() {
    document.getElementById('addBookForm').reset();
}


// The Book object prototype constructor function.
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}


// Function that creates new book referencing the prototype.
function addBookToLibrary(title, author, pages, read) {
    const newBookObject = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBookObject);
    console.log(newBookObject);
    return newBookObject;
  }


// window.onload = function() {
// const deleteBtn = document.getElementsByClassName(".delete-entry-button");
// deleteBtn.addEventListener("click", (event) => {
//     console.log(event);
// });
    
//   }



});


