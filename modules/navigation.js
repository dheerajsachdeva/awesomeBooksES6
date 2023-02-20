/* eslint-disable no-unused-vars */

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
  contact.classList.add('hidden');
});

listLink.addEventListener('click', () => {
  articles.classList.remove('hidden');
  heading.classList.remove('hidden');
  listLink.classList.add('active');
  form.classList.add('hidden');
  addLink.classList.remove('active');
  contactLink.classList.remove('active');
  contact.classList.add('hidden');
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