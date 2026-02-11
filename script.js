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
    let body = document.querySelector('body')
    for (book of myLibrary) {
        let displayedBook = document.createElement('div')
        displayedBook.textContent = book.info
        body.appendChild(displayedBook)
    }
}
