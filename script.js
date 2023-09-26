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
const ul = document.querySelector("ul");

const myLibrary = [lotr, lotr1, lotr2];
emptyCheck();
console.log(myLibrary)


// TODO - Display empty library message if no books in myLibrary array.
function emptyCheck() {
    if (myLibrary.length === 0) { 
        // TODO If myLibrary is empty
     }
    else if (myLibrary.length > 0) {
        // TODO
    }
    else {
        return;
    }
}


// Loop over myLibrary array to display book ojects on individual cards.
for (let bookIndex = 0; bookIndex < myLibrary.length; bookIndex++) {
    const booksList = document.getElementById("booksList");
    let listedBook = document.createElement('li');
    let deleteEntryBtn = document.createElement('button');
    deleteEntryBtn.className = "delete-entry-button";
    let readStatus = "";
    if (bookIndex.read == false) {
        readStatus = "Not Completed";
    }
    else {
        readStatus = "Completed";
    }
    listedBook.innerHTML = `<p class="title">${myLibrary[bookIndex].title}</p> 
                            <p>${myLibrary[bookIndex].author}</p> 
                            <p>${myLibrary[bookIndex].pages} pages</p> 
                            <p>${readStatus}</p>`;
    deleteEntryBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    
    listedBook.dataset.id=`${bookIndex}`;
    console.log(listedBook.dataset.id);

    // eventListener on delete button to remove book from myLibrary and delete element from HTML.
    listedBook.addEventListener('click', function (e) {
        if (e.target.parentElement.tagName == "BUTTON" || e.target.parentElement.tagName == "svg") {
                let bookTitle = listedBook.querySelector('.title').innerHTML;

                // Nested loop to look for matching book title in myLibrary array.
                for (let book in myLibrary) {
                    for (title in book) {
                        if(myLibrary[book].title == bookTitle) {
                            console.log(`${myLibrary[book].title} & ${bookTitle} match!`)
                            console.log(myLibrary.indexOf((myLibrary[book])))
                            myLibrary.splice((myLibrary.indexOf((myLibrary[book]))), 1)
                            listedBook.remove();
                            console.log(myLibrary)
                        }
                    }
                }
        }
        }
    )
    booksList.appendChild(listedBook);
    listedBook.appendChild(deleteEntryBtn);
}


// Add new book modal event listeners.
showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

favDialog.addEventListener("close", (e) => {
    resetBookForm();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault() 
    favDialog.close();
  });


// Adds new book function to myLibrary array on submit from Add New Book modal.
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
    newBook.dataset.id=`${myLibrary.length-1}`;
    newBook.innerHTML = `<p class="title1">${newBookObject.title}</p> 
                        <p>${newBookObject.author}</p> 
                        <p>${newBookObject.pages} pages</p> 
                        <p>${readOrNot}</p>`;

    deleteEntryBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';    
    
    // Adds new book as a card to the main container.
    existingBooks.appendChild(newBook);
    newBook.appendChild(deleteEntryBtn);
    favDialog.close();
    resetBookForm();
    console.log(newBook.dataset.id);
    console.log(myLibrary)

    //emptyCheck();

    // Event listener put on button which deletes book from myLibrary && from HTML.
    newBook.addEventListener('click', function (e) {
        if (e.target.parentElement.tagName == "BUTTON" || e.target.parentElement.tagName == "svg") {
            let bookTitle = newBook.querySelector('.title1').innerHTML;
            for (let book in myLibrary) {
                for (title in book) {
                    if(myLibrary[book].title == bookTitle) {
                        console.log(`${myLibrary[book].title} & ${bookTitle} match!`)
                        console.log(myLibrary.indexOf((myLibrary[book])))
                        myLibrary.splice((myLibrary.indexOf((myLibrary[book]))), 1)
                        newBook.remove();
                        console.log(myLibrary)
                    }
                }
            }
        }
    }
    )
})


// Function that resets the input values of the book form.
function resetBookForm() {
    document.getElementById('addBookForm').reset();
}


// The Book object prototype // constructor function.
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}


// Function that creates new book using the Book prototype above.
function addBookToLibrary(title, author, pages, read) {
    let title1 = document.getElementById('title');
    const newBookObject = new Book(title1.value, author.value, pages.value, read.checked);
    console.log(newBookObject);
    myLibrary.push(newBookObject);
    emptyCheck();
    return newBookObject;
  }


});


