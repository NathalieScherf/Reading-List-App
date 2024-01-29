console.log('Hi from my app!')

// console.log(window)

// alert('Hello!')
// window.alert("with window")

console.log(document);

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

// Two other examples: 

// // let userName = prompt('What is your name?')
// let userName = 'Hubert'

// let pGreeting = document.createElement('p')
// pGreeting.innerText = `Welcome to the page: ${userName}`
// let targetA = document.querySelector('a')
// targetA.append(pGreeting)

// // 
// let myDiv = document.createElement('div')
// myDiv.innerHTML = "<h3> This is an h3</h3>"
// myDiv.style.backgroundColor = 'green'
// document.querySelector('.collection-list').prepend(myDiv)


// Object for book:

let books = [
  {
    title: 'Künstliche Intelligenz',
    authors: 'H. L Dreyfus & S. E Dreyfus',
    year: '1986',
    description: 'a great book about AI',
    coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg'
  }, {
    title: 'Neuromancer',
    authors: 'William Gibson',
    year: '1984',
    description: 'a classic cyberpunk novel',
    coverImage: 'https://m.media-amazon.com/images/I/51rEx2q3+iL._SY346_.jpg'
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    authors: 'Douglas Adams',
    year: '1979',
    description: 'a hilarious science fiction classic',
    coverImage: 'https://m.media-amazon.com/images/I/61ZsRWFIVqL._SY344_BO1,204,203,200_.jpg'
  },
  {
    title: 'Pride and Prejudice',
    authors: 'Jane Austen',
    year: '1813',
    description: 'a classic novel of manners and love',
    coverImage: 'https://m.media-amazon.com/images/I/61N8qgZsbYL.jpg'
  },
  {
    title: 'To the Lighthouse',
    authors: 'Virginia Woolf',
    year: '1927',
    description: 'a modernist novel exploring consciousness and perception',
    coverImage: 'https://m.media-amazon.com/images/I/51pAPu1+fbL.jpg'
  }, {
    title: 'The Handmaid\'s Tale',
    authors: 'Margaret Atwood',
    year: '1985',
    description: 'a dystopian novel exploring themes of power and control',
    coverImage: 'https://m.media-amazon.com/images/I/51ldOMR8vLL.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    authors: 'Harper Lee',
    year: '1960',
    description: 'a powerful novel addressing racial injustice',
    coverImage: 'https://m.media-amazon.com/images/I/81Oth-+jX4L.jpg'
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
        <p class="card-text  ${ book.year > 1959 ? "bg-info" : "bg-secondary"}"><small class="text-body-secondary">${book.year}</small></p>
      </div>
    </div>
  </div>`
 
  document.querySelector('.collection-list').append(cardDiv)
})




