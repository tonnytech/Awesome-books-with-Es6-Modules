import Book from "./modules/books.js";
import Store from "./modules/store.js";
import UI from "./modules/user-interface.js";


// Display book events
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Add a book event
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent submit action of form
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add book to UI
  UI.addBookToList(book);

  // Add book to local Storage
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  //    Remove book from UI by attaching it to a method
  UI.deleteBook(e.target);

  //  Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// nav-links

const list = document.querySelector('#list');
const addListContent = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

// forms to display and hide

const FormAndList = document.querySelector('#form-and-list');
const contactForm = document.querySelector('#contact-form');
const listOfBooks = document.querySelector('#list-section');
const addForm = document.querySelector('#add-books-form');
const theTime = document.querySelector('#time-section');

const showDateTime = () => {
  const mytime =new Date();
  const currentTime = mytime.toUTCString();
  theTime.textContent = currentTime;
}


contact.addEventListener('click', (e)=> {
  e.preventDefault();
  contactForm.style.display ="block"
  addForm.style.display = 'none';
  listOfBooks.style.display = "none";
});

addListContent.addEventListener('click', (e) => {
  e.preventDefault();
  contactForm.style.display = 'none';
  addForm.style.display='block';
  listOfBooks.style.display = "none";
});

list.addEventListener('click', () => {
    addForm.style.display = 'none';
  contactForm.style.display = 'none';
  contactForm.style.display ="none";
  listOfBooks.style.display = "block";
});

window.onload = () => { 
  showDateTime(); 
}
