let books = [];

const formText = document.querySelector("#articleForm");

const title = document.querySelector(".title");
const author = document.querySelector(".author");

const addButton = document.querySelector(".addButton");
const removeButton = document.querySelector(".removeButton");

formText.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleText = formText.elements.titleText.value;
  const authorText = formText.elements.authorText.value;
  if (titleText && authorText) {
    books.push({
      id: books.length + 1,
      title: titleText,
      author: authorText,
    });
    displayData();
  }
});

function displayData() {
  let innerHTML = "";
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
  document.querySelector("#articles").innerHTML = innerHTML;
}

function removeData(id) {
  books = books.filter((book) => id !== book.id);
  displayData();
}
