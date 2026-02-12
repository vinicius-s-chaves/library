const booksList = document.querySelector('#booksList')
const bookForm = document.querySelector('#bookForm')
let myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = crypto.randomUUID()
    this.info = `${title}, by ${author}, ${pages} pages. Readed:`
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

        let readCheck = document.createElement('input')
        readCheck.type = 'checkbox'
        readCheck.checked = book.readStatus

        displayedBook.appendChild(readCheck)
        displayedBook.appendChild(btnRemoveBook)
        booksList.appendChild(displayedBook)
    }
}

bookForm.addEventListener('submit', submitBookInfo)

function submitBookInfo(e) {
    let title = document.querySelector('#inTitle').value
    let author = document.querySelector('#inAuthor').value
    let pages = document.querySelector('#inPages').value
    let readStatus = document.querySelector('#inRead').checked

    addBookToLibrary(title, author, pages, readStatus)
    displayBooks()
    e.preventDefault()
}

function removeBook() {
    myLibrary = myLibrary.filter((book) => book.id != this.dataset.id)
    displayBooks()
}

addBookToLibrary('Harry Potter', 'J.K. Rowlling', 500, true)
displayBooks()
