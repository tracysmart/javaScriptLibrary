const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
const key = "IKpN64p7Ui9P2zZUP2XXbpXOvBreQkkj"; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none;'

let pageNumber = 0;
let displayNav = false;

     //1                       //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);  //3
previousBtn.addEventListener('click', previousPage);  //3

                
function fetchResults(e) {
    e.preventDefault(); 
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; 
    
    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };

    fetch(url)
    .then(function(result) {
    return result.json(); //2
  }).then(function(json) {
      displayResults(json); //3
  });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
};
    let articles = json.response.docs;
    if(articles.length === 10) {
        nav.style.display = 'block'; 
    } else {
        nav.style.display ='none';
    }
    
    if(articles.length === 0) {
        console.log("No results");
    } else { 
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article'); //1
            let heading = document.createElement('h2'); //2
            let link = document.createElement('a');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];  //2
            console.log("Current:", current);  //3

            link.href = current.web_url;  //4
            link.textContent = current.headline.main;  //5

            para.textContent = 'Keywords: ';
            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            clearfix.setAttribute('class', 'clearfix);');

            article.appendChild(heading); 
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);  //6 
            section.appendChild(article);  
            }
            }
        };
            
    function nextPage(){
        console.log("Next button clicked");
      } 
      
      function previousPage(){
        console.log("Previous button clicked");
      }
    
