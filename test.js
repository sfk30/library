const cardsBody = document.getElementById('card-body')
const addBook = document.getElementById('add')

addBook.addEventListener('click', displayBook)

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title,author,pages,read) {
  var newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function displayBook() {
    const currentBook = myLibrary[0]

    const card = document.createElement('div')
    card.setAttribute('id', 'card')
  
    var title = document.createElement('p')
    title.setAttribute('class', 'title')
    title.textContent = 'Title:' + ' ' + currentBook.title
    console.log(title.textContent)
    
    var author = document.createElement('p')
    author.setAttribute('class', 'author')
    author.textContent = 'Author:' + ' ' + currentBook.author
    console.log(author.textContent)
  
    var pages = document.createElement('p')
    pages.setAttribute('class', 'pages')
    pages.textContent = 'Pages:' + ' ' + currentBook.pages
    console.log(pages.textContent)
  
    var read = document.createElement('p')
    read.setAttribute('class', 'read')
    read.textContent = 'Read:' + ' ' +currentBook.read
    console.log(read.textContent)
  
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(read)
    cardsBody.appendChild(card)
  
    myLibrary.shift()
  }