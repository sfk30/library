const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  var newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function displayBook() {
    // for (let i of myLibrary) {
    //     console.log(i)
    // }
    myLibrary.forEach((book) => {
        console.log(book)
    })
}

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
// const deathlyHallows = new Book('Deathly Hallows', 'J K Rowling', '854', 'read')