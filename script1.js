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

const addLink = document.querySelector('.nav-item-add');
const listLink = document.querySelector('.nav-item-list');
const contactLink = document.querySelector('.nav-item-contact');
const form = document.querySelector('#add-book');
const contact = document.querySelector('#contact-info');
const heading = document.querySelector('.heading');
const articles = document.querySelector('#articles');

addLink.addEventListener('click', () => {
  form.classList.remove('hidden');
  heading.classList.add('hidden');
  addLink.classList.add('active');
  articles.classList.add('hidden');
  listLink.classList.remove('active');
  contactLink.classList.remove('active');
});

listLink.addEventListener('click', () => {
  articles.classList.remove('hidden');
  heading.classList.remove('hidden');
  listLink.classList.add('active');
  form.classList.add('hidden');
  addLink.classList.remove('active');
  contactLink.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  contact.classList.remove('hidden');
  form.classList.add('hidden');
  heading.classList.add('hidden');
  articles.classList.add('hidden');
  listLink.classList.remove('active');
  addLink.classList.remove('active');
  contactLink.classList.add('active');
});

function formatAMPM() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDay();
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${month} ${day} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
  return strTime;
}

const date = document.querySelector('.date span');
date.innerHTML = formatAMPM();
