const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '3MciWhXZ3kZ4Rz6qZHkC9Foz1U6fzpHJ';
let url;
​
const searchTerm = document.querySelector('.search'); // acces searchField on html page
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
​
nav.style.display = 'none'; // hides the nav element from view
let pageNumber = 0; // this keeps track of what page we are on
// console.log('PageNumber:', pageNumber);
​
// listens for a submit event then run fetchResults()
searchForm.addEventListener('submit', fetchResults);
// listens for a click event then runs nextPage()
nextBtn.addEventListener('click', nextPage);
// listens for a click event then runs previousPage()
previousBtn.addEventListener('click', previousPage);
​
// eventListener for searchForm
function fetchResults(e) {
    // console.log(e);
    e.preventDefault(); // stops the default submit event that a form has, this allows us to create our own event for this form, also known as an override
​
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
    // console.log('URL:', url);
​
// check to see if a startDate.value has been provided
    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value; // add the query parameter to the url string
        console.log('URL:', url);
    }
​
// check to see if an endDate.value has been provided
    if (endDate.value !== '') {
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;  // add the query parameter to the url string
        console.log('URL:', url);
    }
​
    fetch(url) // submits a GET request
        .then(function (result) {      // once a reply has been made
            console.log(result)
            return result.json(); // return a converted JSON to JS object
        })
        .then(function (json) {
            console.log(json);
            displayResults(json); // passes the parsed json data to displayResults()
        })
}
​
////////////////////////////////////////////////////////////////////////////////////////
​
function displayResults(json) {
    console.log('Display Results', json);
    // console.log(json.response.docs);
​//while loop[removes search results]
    while (section.firstChild) { // this clears the articles from view when a new search is done
        section.removeChild(section.firstChild); // remove that child element
    }
​//JSON-all info from NYT.dot-notation to dig into api(JSON) response(inside API) docs(inside response)
    let articles = json.response.docs; // placeholder to access the article data
    // console.log(articles);
​
​//if no articles show "No results"
    if (articles.length === 0) { // check to see if the articles.length is empty
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) {
            // console.log(i);
   //CREATING the variables for the HTML elements were pulling form the API          
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
    //CREATING a variable of current, digging into the articles ^[array] and populating the current article        
            let current = articles[i];
            console.log('Current:', current);
​//creating a href property & assinging it ot the current articles ^ & setting URL
            link.href = current.web_url;
//setting text content to the current articles ^/ Turns JSON info into HTML            
            link.textContent = current.headline.main;
//turns JSON info into "keywords"            
            para.textContent = 'Keywords: ';
​
            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
​
            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }
​//ORDER of code Matters
            clearfix.setAttribute('class', 'clearfix');
            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article); //HTML element that displays the code above ^ (106-111)
​
            // clearfix.style.padding = '50px' adds more padding 
        }
    }
​//If we have 10 articles we want to show the next page button, if NOT display nothing.
    if (articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
​//eventListener, next page invokes fetch results function, prevent default stops page from refreshing 
function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}
​//Eventlistener, same as above/ if page number is 0, just return results, but dont show anything BELOW zero.
function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
        // fetchResults(e);
    } else {
        return;
    }
​
    fetchResults(e);
    console.log('Page:', pageNumber);
}

if (pageNumber === 0) {
  previousBtn.style.display = "none";
  ne
} else {
  if (pageNumber > 0) {
    nextBtn
  }
}


