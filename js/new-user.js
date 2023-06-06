const token = localStorage.getItem('token');

document.getElementById('loginPage').addEventListener('submit', function(event){

    event.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Authorization", `Token ${token}`);
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
  .then(response => response.json())
  .then(result =>
    //  console.log(result)
     result.success = "Done" ? alert(`Yangi ${newUsername} nomli talaba qo'shildi`): ''
     )
  .catch(error => console.log('error', error));

})
