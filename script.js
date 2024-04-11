const display = document.querySelector('.cards');

const myLibrary = [{ "author": "Shihab", "title": "Shihab going to win", "pages": 230, "status": false }, { "author": "Rahman", "title": "Hold on There", "pages": 120, "status": true }, { "author": "Shihab", "title": "Shihab going to win", "pages": 230, "status": false }, { "author": "Rahman", "title": "Hold on There", "pages": 120, "status": true }];



function Book() {
    // the constructor...
    for (let prop in myLibrary) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML =
            `
            <div>
                <h2>${myLibrary[prop].author}</h2>
                <h3>${myLibrary[prop].title}</h3>
                <p>${myLibrary[prop].pages}</p>
                ${(myLibrary[prop].status) ? '<button>Read</button>' : '<button>Not Read</button>'}
                <button>Remove</button>
            </div>
        `;

        display.appendChild(bookDiv);
    }
}

Book();

function addBookToLibrary() {
    // do stuff here
}
