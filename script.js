// export
import { books } from "./booksData.js"
// export default
import changeStatus from "./changeStatus.js"

let createBookCard = (book) => {

  // Build cards using js:
  let cardDiv = document.createElement('div')
  // Add styling
  cardDiv.style.maxWidth = '540px'
  cardDiv.classList.add('card')
  cardDiv.classList.add('mb-3')
  // add content for the card: 
  cardDiv.innerHTML = `<div class="row g-0">
    <div class="col-md-4">
      <img src="${book.coverImage}" class="img-fluid rounded-start" alt="${book.title}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h5>${book.authors}</h5>
        <p class="card-text">${book.description}</p>
        <div>
          <i class="bi ${book.haveRead ? "bi-bookmark-check" : "bi-bookmark"} "></i>  
          <button class="statusButton"> ${book.haveRead ? 'Have read it' : "Want to read it"} </button>
        </div>
        <p class="card-text"><small class="text-body-secondary">${book.year}</small></p>
      </div>
    </div>
  </div>`
  document.querySelector('.collection-list').append(cardDiv)
}
// Loop through the array: 
books.forEach((book) => createBookCard(book))

// Add listner to all status buttons: 

let statusButtons = document.querySelectorAll('.statusButton')
statusButtons.forEach(button => {
  button.addEventListener('click', changeStatus)
})

// Input to add more books: 

let newBookField = document.querySelector('#addBook')

// Demo with enter to see an other event!
newBookField.addEventListener('keypress', (event ) => {
  if (event.key === "Enter") {
  let newBook = event.target.value
  if (newBook.length)  {
    // just to demo adding data to the array, we don't store it anywhere
    books.push({title: newBook}) 
    // create a card for the new book
    createBookCard({title: newBook})
    // add eent handler to the new button created in the function createBookCard.
    let buttons = document.querySelectorAll('.statusButton')
    let newButton = buttons[buttons.length-1]
    newButton.addEventListener('click', changeStatus)

  }
}
})
