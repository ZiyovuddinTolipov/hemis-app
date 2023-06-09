const loginPage = document.getElementById('loginPage');
// var siteUrl = 'file:///C:/Users/User/Desktop/Ziyovuddin/hemis-app'; 
var siteUrl = 'https://hemis-app.vercel.app';

// Register the login

loginPage.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

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
        if (data.detail == 'Invalid username/password.') {
          alert('Please enter');
        } else {
          localStorage.setItem('token', data[0].token)
          localStorage.setItem('role', data[0].type)
          localStorage.setItem('username', loginUsername)
          localStorage.setItem('password',loginPassword)
          data[0].type =='student' ? window.location.href = `${siteUrl}/student.html` : window.location.href = `${siteUrl}/teacher.html`
          
        }

      
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });


});
