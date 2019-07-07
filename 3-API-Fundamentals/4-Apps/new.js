let baseURL = 'https://api.harvardartmuseums.org';
let key = '0b6b6d80-7121-11e9-873b-af3bbc8b24a5';
let url;

let subButton = document.querySelector('.submit');
subButton.addEventListener('click', fetchData);

function fetchData(event) {
  event.preventDefault();

  url = `${baseURL}/color?apikey=${key}`
  
  // url = `${baseURL}/color?apikey=${key}`
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log("you have an error.");
    })
}
