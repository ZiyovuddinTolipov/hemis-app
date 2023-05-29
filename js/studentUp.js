document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('send_s');

    const file = document.getElementById('file-input').files[0];

    const username = localStorage.getItem('username');
    // const password = localStorage.getItem('password');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    formData.append('username', username);
    console.log(id,token,username);

    fetch('https://eduhemisuz.pythonanywhere.com/send_work/', {
      method: 'POST',
      body: formData,
      headers: {
        // 'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Authorization': 'Token '+ token,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse response as JSON
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        console.log(data);
        // Handle the response data
      })
      .catch(error => {
        console.error(error);
        // Handle any errors
      });
  });