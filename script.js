const getBooks = JSON.parse(localStorage.getItem('books'));
let books = getBooks || [];

const formText = document.querySelector('#articleForm');

function displayData() {
  let innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    innerHTML += `
            <article id="${books[i].length + 1}">
                <div class="title">${books[i].title}</div>
                <div class="author">${books[i].author}</div>
                <button class="removeButton" onclick="removeData(${
  books[i].id
})">Remove</button>
            </article>
            <hr />
            `;
  }
  document.querySelector('#articles').innerHTML = innerHTML;
}

formText.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleText = formText.elements.titleText.value;
  const authorText = formText.elements.authorText.value;
  if (titleText && authorText) {
    books.push({
      id: books.length + 1,
      title: titleText,
      author: authorText,
    });
    const myBooks = JSON.stringify(books);
    localStorage.setItem('books', myBooks);

    displayData();
    formText.elements.titleText.value = '';
    formText.elements.authorText.value = '';
  }
});

/* eslint-disable no-unused-vars */
function removeData(id) {
  books = books.filter((book) => id !== book.id);
  const myBooks = JSON.stringify(books);
  localStorage.setItem('books', myBooks);
  displayData();
}
displayData();

const storageForm = document.querySelector('#articleForm');
storageForm.addEventListener('input', () => {
  const data = {
    titleText: formText.elements.titleText.value,
    authorText: formText.elements.authorText.value,
  };
  localStorage.setItem('storageForm', JSON.stringify(data));
});
const formObject = JSON.parse(localStorage.getItem('storageForm'));
formText.elements.titleText.value = formObject.titleText;
formText.elements.authorText.value = formObject.authorText;
