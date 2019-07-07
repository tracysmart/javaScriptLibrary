function fetchAllFromAuthRoute() {
  const fetch_url = `http://localhost:3000/authtest/getall`
  const accessToken = localStorage.getItem('SessionToken') //1

  const response = fetch(fetch_url, {
      method: 'GET', //2
      headers: {
          'Content-Type': 'application/json', //3
          'Authorization': accessToken //4
      }
  })
      .then(response => {
          return response.json();
      })
      .then(data => {

          console.log(data)
      })
}

/***************************************
 * FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {
  const fetch_url = `http://localhost:3000/authtest/create` 
  const accessToken = localStorage.getItem('SessionToken')

  let authTestDataInput = document.getElementById('authTestData').value; //1

  let authInputData = { authtestdata: { item: authTestDataInput } }; //2

  const response = fetch(fetch_url, {
      method: 'POST', //3
      headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken
      },
      body: JSON.stringify(authInputData)  //4
  })
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data)
      })
}

/***************************************
 * GET ITEM BY USER
*************************************/
function getOneByUser() {
  let postIdNumber = document.getElementById("getNumber").value; //1

  const fetch_url = `http://localhost:3000/authtest/${postIdNumber}` //2
  const accessToken = localStorage.getItem('SessionToken')

  const response = fetch(fetch_url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken
      }
  })
      .then(response => {
          return response.json();
      })
      .then(function (response) {
          console.log(response); 
          var myItem = document.getElementById('getItemValue'); //3
          myItem.innerHTML = response.authtestdata; //4
      })
}

/***************************************
 * PUT to authtest/update/:id
*************************************/
function updateItem() {
    let postIdNumber = document.getElementById("updateNumber").value; 
    let authTestDataInput = document.getElementById('updateValue').value; //1

    const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}` //2
    const accessToken = localStorage.getItem('SessionToken')

    let authInputData = { authtestdata: { item: authTestDataInput } }; //3
    const response = fetch(fetch_url, {
        method: 'PUT', //4
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData) //5
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data) //6
            var myItem = document.getElementById('newItemValue') //7
            myItem.innerHTML = data.authtestdata; //7
            fetchAllFromAuthRoute(); //8
        })
}

function deleteItem() {
    let postIdNumber = document.getElementById("deleteNumber").value;

    const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applicationm/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            console.log(response);
            fetchAllFromAuthRoute()
        })
    }

    function fetchFromOneDisplayData() {
