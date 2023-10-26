const cardsBody = document.getElementById('card-body')
const addBook = document.getElementById('add')
const dialog = document.querySelector('dialog')
const submitBtn = document.getElementById('sub-btn')
const cancelBtn = document.getElementById('cancel-btn')
const booksForm = document.getElementById('books-form')

addBook.addEventListener('click', () => {
  dialog.showModal()
})


dialog.addEventListener('click', (e) => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    booksForm.reset()
    dialog.close()
  }
})


var myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = isRead()
}

function isRead() {
  if (document.getElementById('user-read').checked) {
    return 'Read'
  } 
  return 'Not read'
}

function addBookToLibrary() {
  title = document.getElementById('user-title').value
  author = document.getElementById('user-author').value
  pages = document.getElementById('user-pages').value
  read = isRead()
  var newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}


function displayBook() {
  const currentBook = myLibrary[0]

  const card = document.createElement('div')
  card.setAttribute('class', 'card')

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

  var read = document.createElement('button')
  read.setAttribute('class', 'read')
  read.textContent = currentBook.read
  console.log(read.textContent)

  if (isRead() === 'Read') {
    read.classList.toggle('yes')
  } else {
    read.classList.toggle('no')
  }

  read.addEventListener('click', () => {
    if (read.textContent === 'Read') {
      read.classList.toggle('yes')
      read.classList.toggle('no')
      read.textContent = 'Not read'
    } else if (read.textContent === 'Not read') {
      read.classList.toggle('yes')
      read.classList.toggle('no')
      read.textContent = 'Read'
    }
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'delete-btn')
  deleteBtn.textContent = 'Delete'

  card.appendChild(title)
  card.appendChild(author)
  card.appendChild(pages)
  card.appendChild(read)
  card.appendChild(deleteBtn)
  cardsBody.appendChild(card)

  myLibrary.shift()

  deleteBtn.addEventListener('click', () => {
    cardsBody.removeChild(card)
      
  })

}

booksForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addBookToLibrary()
  displayBook()
  booksForm.reset()
  dialog.close()
})


cancelBtn.addEventListener('click', () => {
  booksForm.reset()
  dialog.close()
})

