const bookCard = document.querySelector('.book-card')
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

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
// const deathlyHallows = new Book('Deathly Hallows', 'J K Rowling', '854', 'read')

function displayBook() {
    // for (let i of myLibrary) {
    //     console.log(i)
    // }
    myLibrary.forEach((book) => {
        // bookCard.textContent = book
        // console.log(book)
        var output = ''
        for (let key in book) {
          output += key + ':' + book[key] + '\n'
        }
        bookCard.textContent += output  
        myLibrary.shift()
    })
}
