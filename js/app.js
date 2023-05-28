const loginPage =document.getElementById('loginPage');


// Register the login

loginPage.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            user: loginUsername,
            password: loginPassword
        })})
        //.then(res => res.json())
        //.then(data => console.log(data))
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        window.location.href = 'http://localhost:3000/dashboard';
      })
      .catch(err => console.log(err));
});
