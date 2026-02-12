const booksList = document.querySelector('#booksList')
const bookForm = document.querySelector('#bookForm')
let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
    this.info = `${title}, by ${author}, ${pages} pages. Read: ${read}`
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function displayBooks() {
    booksList.textContent = ''
    for (let book of myLibrary) {
        let displayedBook = document.createElement('div')
        displayedBook.textContent = book.info
        
        let btnRemoveBook = document.createElement('button')
        btnRemoveBook.textContent = 'Remove Book'
        btnRemoveBook.dataset.id = book.id
        btnRemoveBook.addEventListener('click', removeBook)

        displayedBook.appendChild(btnRemoveBook)
        booksList.appendChild(displayedBook)
    }
}

bookForm.addEventListener('submit', submitBookInfo)

function submitBookInfo(e) {
    let title = document.querySelector('#inTitle').value
    let author = document.querySelector('#inAuthor').value
    let pages = document.querySelector('#inPages').value
    // let read = document.querySelector('#readed').value

    addBookToLibrary(title, author, pages, 'yes')
    displayBooks()
    e.preventDefault()
}

function removeBook() {
    myLibrary = myLibrary.filter((book) => book.id != this.dataset.id)
    displayBooks()
}

addBookToLibrary('Harry Potter', 'J.K. Rowlling', 500, 'yes')
displayBooks()
