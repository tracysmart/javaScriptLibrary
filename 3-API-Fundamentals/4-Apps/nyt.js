const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
const key = "IKpN64p7Ui9P2zZUP2XXbpXOvBreQkkj";
let url; 

//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none";
let pageNumber = 0;
let displayNav = false;

     //1                       //2
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage); //3
previousBtn.addEventListener("click", previousPage);  //3

             //1
function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value; 
    if(startDate.value !== "") {
        console.log(startDate.value)
        url += "&begin_date=" + startDate.value;
    };

    if(endDate.value !== "") {
        url+= "&end_date=" + endDate.value;
    };

    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        dispayResults(json);
    });
}

function displayResults(json) {
    console.log(json.response.docs);
};

function nextPage(){
    console.log("Next button clicked"); 
}  //5

function previousPage(){
    console.log("Next button clicked");
}  //5