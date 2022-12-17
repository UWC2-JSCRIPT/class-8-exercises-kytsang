// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

//add api key
const API_KEY = '2LEbGMbyq2FEuTv7GJKG2mOJMpVYIPCX'

//add forminput
const formInput ='cooking';

const url = `${BASE_URL}?q=${formInput}&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    const paragraph = document.createElement('p')
    paragraph.innerText=article.lead_paragraph 

    document.querySelector(".container").appendChild(paragraph);

    //if there are more than 1 image, replace source in html with that url
    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });



  // //class code
  // const dataFetch = fetch('http://jsonplaceholder.typicode.com/todos/1')

  // dataFetch.then((data)=>{
  //   console.log(data)
  //   return data.json()
  // })
  // .then((data)=>{
  //   console.log("second then callback", data)
  // })

