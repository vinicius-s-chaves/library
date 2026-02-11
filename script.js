const body = document.querySelector('body')
const bookForm = document.querySelector('#bookForm')
const myLibrary = []

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
    for (let book of myLibrary) {
        let displayedBook = document.createElement('div')
        displayedBook.textContent = book.info
        body.appendChild(displayedBook)
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

displayBooks()
