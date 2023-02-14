
class Library {

  static displayData() {

    let innerHTML = '';
    const books = this.listData();
    for (let i = 0; i < books.length; i += 1) {
      innerHTML += `
                <article id="${books[i].id}">
                    <div class="title">${books[i].title}</div>
                    <div class="author">${books[i].author}</div>
                    <button class="removeButton" onclick="Library.removeData(${books[i].id
        })">Remove</button>
                </article>
                <hr />
                `;

    } document.querySelector('#articles').innerHTML = innerHTML;
    return innerHTML;

  }

  static addData(titleText, authorText) {
    let newBooks1 = this.listData();
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
  };

  static listData() {
    const getBooks = JSON.parse(localStorage.getItem('books'));
    let books = getBooks || [];
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
})


document.querySelector('#articles').innerHTML = Library.displayData();
