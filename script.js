const display = document.querySelector('.cards');


let myLibrary = [];

function Book() {
    // the constructor...
    display.innerHTML = " ";
    for (let prop in myLibrary) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML =
            `
            <div>
                <h2>${myLibrary[prop].title}</h2>
                <h3>${myLibrary[prop].author}</h3>
                <p>${myLibrary[prop].page}</p>
                <button class="readBtn">${myLibrary[prop].status ? "Read" : "Not Read"}</button>
                <button class="removeBtn">Remove</button>
            </div>
        `;

        const readBtn = bookDiv.querySelector('.readBtn');
        readBtn.addEventListener('click', () => {
            myLibrary[prop].status = !myLibrary[prop].status;
            readBtn.textContent = myLibrary[prop].status ? "Read" : "Not Read";
        })

        const removeBtn = bookDiv.querySelector('.removeBtn');
        removeBtn.addEventListener('click', () => {
            const indexToRemove = myLibrary.indexOf(myLibrary[prop])
            console.log(indexToRemove);
            if (indexToRemove !== -1) {
                myLibrary.splice(indexToRemove, 1);
                bookDiv.remove()
            }
        })

        display.appendChild(bookDiv);
    }
}





function addBookToLibrary(title, author, page, status) {
    // do stuff here
    myLibrary = [...myLibrary, { "title": title, "author": author, "page": page, "status": status }];
    // console.log("myLibrary: ", myLibrary);
    Book();
}



// modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var checkbox = document.getElementById("myCheckbox");


// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Submit form
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let status;
    // Check if the checkbox is checked
    if (checkbox.checked) {
        status = true;
    } else {
        status = false;
    }
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var page = document.getElementById("page").value;
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('page').value = "";
    checkbox.checked = false;
    addBookToLibrary(title, author, page, status)
    // console.log(title, author, page, status);
    // Here you can perform further actions with the submitted data
    modal.style.display = "none"; // Close modal after submission
});




