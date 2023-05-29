
document.getElementById('loginPage').addEventListener('submit', function(event){

    event.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Token 9e4eb100efbb677fcc4048634af28ef05a7c6eb2");
myHeaders.append("Content-Type", "application/json");

const newUsername = document.getElementById("newUsername").value;
const newPassword = document.getElementById("newPassword").value;

var raw = JSON.stringify({
  "username": newUsername,
  "password": newPassword
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eduhemisuz.pythonanywhere.com/add_user/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

})
