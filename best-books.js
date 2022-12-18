const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

const API_KEY = '2LEbGMbyq2FEuTv7GJKG2mOJMpVYIPCX'
const bestHardcoverUrl = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`

  // Fetch bestselling books for date and add top 5 to page

fetch(bestHardcoverUrl)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    //book1
    let book1 = responseJson.results.books[0];
    let title1 = book1.title;
    let author1 = book1.author;
    let description1 = book1.description;
    let imgUrl1 = book1.book_image;

    document.getElementById('book1Title').innerText = `Title: ${title1}`;
    document.getElementById('book1Author').innerText = `Author: ${author1}`;
    document.getElementById('book1Description').innerText = `Description: ${description1}`;
    document.getElementById('book1Img').src = imgUrl1;

    //book2
    let book2 = responseJson.results.books[1];
    let title2 = book2.title;
    let author2 = book2.author;
    let description2 = book2.description;
    let imgUrl2 = book2.book_image;

    document.getElementById('book2Title').innerText = `Title: ${title2}`;
    document.getElementById('book2Author').innerText = `Author: ${author2}`;
    document.getElementById('book2Description').innerText = `Description: ${description2}`;
    document.getElementById('book2Img').src = imgUrl2;

    //book3
    let book3 = responseJson.results.books[2];
    let title3 = book3.title;
    let author3 = book3.author;
    let description3 = book3.description;
    let imgUrl3 = book3.book_image;

    document.getElementById('book3Title').innerText = `Title: ${title3}`;
    document.getElementById('book3Author').innerText = `Author: ${author3}`;
    document.getElementById('book3Description').innerText = `Description: ${description3}`;
    document.getElementById('book3Img').src = imgUrl3;

    //book4
    let book4 = responseJson.results.books[3];
    let title4 = book4.title;
    let author4 = book4.author;
    let description4 = book4.description;
    let imgUrl4 = book4.book_image;

    document.getElementById('book4Title').innerText = `Title: ${title4}`;
    document.getElementById('book4Author').innerText = `Author: ${author4}`;
    document.getElementById('book4Description').innerText = `Description: ${description4}`;
    document.getElementById('book4Img').src = imgUrl4;

     //book5
     let book5 = responseJson.results.books[4];
     let title5 = book5.title;
     let author5 = book5.author;
     let description5 = book5.description;
     let imgUrl5 = book5.book_image;
 
     document.getElementById('book5Title').innerText = `Title: ${title5}`;
     document.getElementById('book5Author').innerText = `Author: ${author5}`;
     document.getElementById('book5Description').innerText = `Description: ${description5}`;
     document.getElementById('book5Img').src = imgUrl5;

  });

});