const loginPage = document.getElementById('loginPage');


// Register the login

loginPage.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    alert(btoa(loginPassword));
 console.log(loginUsername, loginPassword);
    fetch('https://eduhemisuz.pythonanywhere.com/home/', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(loginUsername + ':' + loginPassword),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Username: loginUsername,
            Password: loginPassword
        })
    }).then(response => {
        console.log(response.status); // HTTP status kodini konsolga chiqaring
        console.log(response.statusText); // HTTP status matnini konsolga chiqaring
        return response.json();
      })
      .then(data => {
        console.log(data); // Ishlovchi ma'lumotlarni konsolga chiqaring
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });


});
