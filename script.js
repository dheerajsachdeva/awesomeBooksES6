const books = [{title: "Raj",author: "William"}];

// const titleText = document.querySelector('#titleText').value;
// const authorText = document.querySelector('#authorText').value;
const formText = document.querySelector('form');

const title = document.querySelector('.title');
const author = document.querySelector('.author')

const addButton = document.querySelector('.addButton')
const removeButton = document.querySelector('.removeButton')
console.log(titleText, authorText);

addButton.addEventListener(('click'), () =>{
    // console.log(titleText)
    // console.log(formText.elements.titleText)
    // console.log(formText.elements.titleText.value)
    const titleText = formText.elements.titleText.value;
    const authorText = formText.elements.authorText.value;
if (titleText && authorText){
    books.push({title:titleText, author:authorText})
    displayData();
}

})

function displayData() {
    console.log(books);
    let innerHTML =""
    for (let i=0; i<books.length; i+=1) {
        innerHTML += `<div class="title">
                ${books[i].title}
            </div>
            <div class="author">
                ${books[i].author}
            </div>`
    }
    
    document.querySelector('#articles').innerHTML = innerHTML
}



