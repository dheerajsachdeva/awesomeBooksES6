/* eslint-disable no-unused-vars */
class Library {
  static displayData() {
    let innerHTML = '';
    const books = this.listData();
    for (let i = 0; i < books.length; i += 1) {
      innerHTML += `
                  <article id="${books[i].id}">
                    <div>
                      <span class="title">"${books[i].title}"</span>
                      <span class="separater">by</span>
                      <span class="author">${books[i].author}</span>
                    </div>
                    <button class="removeButton" onclick="Library.removeData(${books[i].id})">Remove</button>
                  </article>
                  `;
    } document.querySelector('#articles').innerHTML = innerHTML;
    return innerHTML;
  }

  static addData(titleText, authorText) {
    const newBooks1 = this.listData();
    if (titleText && authorText) {
      newBooks1.push({
        id: new Date().getTime(),
        title: titleText,
        author: authorText,
      });
      const myBooks = JSON.stringify(newBooks1);
      localStorage.setItem('books', myBooks);
      this.arr = newBooks1;
      this.displayData();
    }
  }

  static listData() {
    const getBooks = JSON.parse(localStorage.getItem('books'));
    const books = getBooks || [];
    return books;
  }

  static removeData(id) {
    let bookData = Library.listData();
    bookData = bookData.filter((book) => id !== book.id);
    const myBooks = JSON.stringify(bookData);
    localStorage.setItem('books', myBooks);
    document.querySelector('#articles').innerHTML = Library.displayData();
  }
}

const formText = document.querySelector('#articleForm');
formText.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleText = formText.elements.titleText.value;
  const authorText = formText.elements.authorText.value;
  Library.addData(titleText, authorText);
  formText.elements.titleText.value = '';
  formText.elements.authorText.value = '';
  Library.displayData();
});

document.querySelector('#articles').innerHTML = Library.displayData();

window.Library = Library;