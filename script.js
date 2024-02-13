// export
import { books } from "./booksData.js"
// export default
import changeStatus from "./changeStatus.js"

// Loop through the array: 
books.forEach((book) => {
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
})

// Add listner to all status buttons: 

let statusButtons = document.querySelectorAll('.statusButton')
statusButtons.forEach(button => {
  button.addEventListener('click', changeStatus)
})


// Fetch: 
const getBooks = async () => {
  let response = await fetch('http://openlibrary.org/subjects/love.json')
  let data = await response.json()
  
  data.works.forEach((book) => {
  // Build cards using js:
  let cardDiv = document.createElement('div')
  // Add styling
  cardDiv.style.maxWidth = '540px'
  cardDiv.classList.add('card')
  cardDiv.classList.add('mb-3')
  // add content for the card: 
  cardDiv.innerHTML = `<div class="row g-0">
    <div class="col-md-4">
      <img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg" class="img-fluid rounded-start" alt="${book.cover_id}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h5>${book.authors[0].name}</h5>
     
        <div>
        
          <p> ${book.availability.available_to_borrow ? 'You can borrow it' : "You cannot borrow it"} </p>
        </div>
        <p class="card-text"><small class="text-body-secondary">${book.first_publish_year}</small></p>
      </div>
    </div>
  </div>`
  document.querySelector('.collection-list').append(cardDiv)
})

}

getBooks()
console.log('After async');