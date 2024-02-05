// Steps: To Add elements:

// 1 Create
let myh2 = document.createElement('h2')

// 2. Add content
myh2.innerText = 'This is my js heading!'
console.log(myh2);

// 3. Insert into html
// finding target using html-tag
let targetH1 = document.querySelector('h1')
// add element to target
targetH1.append(myh2)


// Object for book:

let books = [
  {
    title: 'Künstliche Intelligenz',
    authors: 'H. L Dreyfus & S. E Dreyfus',
    year: '1986',
    description: 'a great book about AI',
    coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
    haveRead: false,
  }, {
    title: 'Neuromancer',
    authors: 'William Gibson',
    year: '1984',
    description: 'a classic cyberpunk novel',
    coverImage: 'https://m.media-amazon.com/images/I/51rEx2q3+iL._SY346_.jpg',
    haveRead: false,
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    authors: 'Douglas Adams',
    year: '1979',
    description: 'a hilarious science fiction classic',
    coverImage: 'https://m.media-amazon.com/images/I/61ZsRWFIVqL._SY344_BO1,204,203,200_.jpg',
    haveRead: true,
  },
  {
    title: 'Pride and Prejudice',
    authors: 'Jane Austen',
    year: '1813',
    description: 'a classic novel of manners and love',
    coverImage: 'https://m.media-amazon.com/images/I/61N8qgZsbYL.jpg',
    haveRead: true,
  },
  {
    title: 'To the Lighthouse',
    authors: 'Virginia Woolf',
    year: '1927',
    description: 'a modernist novel exploring consciousness and perception',
    coverImage: 'https://m.media-amazon.com/images/I/51pAPu1+fbL.jpg',
    haveRead: false,

  }, {
    title: 'The Handmaid\'s Tale',
    authors: 'Margaret Atwood',
    year: '1985',
    description: 'a dystopian novel exploring themes of power and control',
    coverImage: 'https://m.media-amazon.com/images/I/51ldOMR8vLL.jpg',
    haveRead: true
  },
  {
    title: 'To Kill a Mockingbird',
    authors: 'Harper Lee',
    year: '1960',
    description: 'a powerful novel addressing racial injustice',
    coverImage: 'https://m.media-amazon.com/images/I/81Oth-+jX4L.jpg',
    haveRead: true
  }
]

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
          <i class="bi ${book.haveRead ? "bi-bookmark-check" : "bi-bookmark" } "></i>  
          <button class="statusButton"> ${ book.haveRead ? 'Have read it' : "Want to read it"} </button>
        </div>
        <p class="card-text"><small class="text-body-secondary">${book.year}</small></p>
      </div>
    </div>
  </div>`
  document.querySelector('.collection-list').append(cardDiv)
})

const changeStatus = (event) => {
  console.log('status change', event.target);
   // click on button
  let buttonWeClickedOn = event.target
  let icon = buttonWeClickedOn.previousElementSibling
  //  use the button to find the icon
  console.log( icon.classList);
  // change classname of the icon
  // if the icon has the class -check, remove it, add -bookmark
  if(icon.classList.contains('bi-bookmark-check')){
    icon.classList.remove('bi-bookmark-check')
    icon.classList.add('bi-bookmark')
    buttonWeClickedOn.innerText = 'Want to read it'
  } else {
    icon.classList.remove('bi-bookmark')
    icon.classList.add('bi-bookmark-check')
    buttonWeClickedOn.innerText = 'Have read it'
  }

  console.log(icon);
  // Alternative: move icon into button, and change inner html of button

 
}


// Add listner to all status buttons: 

let statusButtons = document.querySelectorAll('.statusButton')

statusButtons.forEach(button => {
  button.addEventListener('click', changeStatus)
})




// Using add event listener instead of onclick inline

let buttonWithClick = document.querySelector('#eventButton')

buttonWithClick.addEventListener('click', () => {
  console.log('Button with event listner added by js');
})
