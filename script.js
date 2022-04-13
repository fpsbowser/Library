// Refactor to class

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let i = 0;
const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'read')
let myLibrary = [book];
let bookTitles = ['thehobbit'];
loopArray(book.title, book.author, book.pages, book.read);

const modal = document.getElementById('modal');
const form = document.getElementById('modal-form');
const formSubmit = document.getElementById('submit');

form.addEventListener('submit', () => {
    let formTitle = form.elements['title'].value
    let formAuthor = form.elements['author'].value
    let formPages = form.elements['pages'].value
    let formRead = form.elements['read'].value
    addBookToLibrary(formTitle, formAuthor, formPages, formRead);
    form.reset();
});

const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', () => {
    modal.showModal();
});

const closeButton = document.getElementById('closebtn');
closeButton.addEventListener('click', () => {
    modal.close();
});






// FUNCTIONS 

// Function that loops through the myLibrary array and displays each book on the webpage.

function loopArray(arg1, arg2, arg3, arg4) {
    for (i; i < myLibrary.length; i++) {
        addCard(arg1, arg2, arg3, arg4)
    }
}

// Function that creates Element and applies style to it

function addCard(cardtitle, cardauthor, cardpages, cardread) {
    const currentDiv = document.getElementById('card-container-id')
    const newCard = document.createElement('div');
    newCard.className = 'card';
    currentDiv.appendChild(newCard);

    const bookTitle = document.createElement('p');
    bookTitle.innerHTML = cardtitle;
    bookTitle.className = 'title';
    newCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = cardauthor;
    bookAuthor.className = 'author';
    newCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.innerHTML = `${cardpages} pages`;
    bookPages.className = 'pages';
    newCard.appendChild(bookPages);

    const bookReadBtn = document.createElement('button');
    bookReadBtn.innerHTML = 'Read';
    bookReadBtn.className = 'readBtn';
    bookReadBtn.setAttribute('id', `readbutton${i}`);
    bookReadBtn.addEventListener('click', (e) => {
        console.log(e.target.parentElement.ch)
        if (e.target.innerHTML == 'Read') {
            e.target.innerHTML = 'Not read';
            e.target.style.backgroundColor = 'red'
        } else {
            e.target.innerHTML = 'Read';
            e.target.style.backgroundColor = 'green'
        }
    })
    newCard.appendChild(bookReadBtn);

    const removeButton = document.createElement('button');
    removeButton.innerHTML= 'Remove';
    removeButton.className = 'removeBtn';
    removeButton.addEventListener('click', (e) => {
        cardtitle = cardtitle.replace(/\s+/g, '');
        newCard.id = cardtitle.toLowerCase();
        e.target.parentElement.remove();
        let index = bookTitles.indexOf(cardtitle.toLowerCase().replace(/\s+/g, ''));
        bookTitles.splice(index, 1);
        myLibrary.splice(index, 1);
        i -= 1;
    })
    newCard.appendChild(removeButton);
    
}

// Function to add book to myLibrary array

function addBookToLibrary(one, two, three, four) {
    const newBook = new Book(one, two, three, four);

    if (bookTitles.includes(one.toLowerCase())) {
        alert('Book already exists!')
    } else {
        myLibrary.push(newBook)
        bookTitles.push(one.toLowerCase().replace(/\s+/g, ''));
        loopArray(one, two, three, four);
    }
    newBook.status(four);
}

Book.prototype.status = (read) => {
    let correctButton = `readbutton${i - 1}`;
    if (read === 'notread') {
            document.getElementById(correctButton).style.backgroundColor = 'red';
            document.getElementById(correctButton).innerHTML = 'Not read';

    } 
}
