document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = 'Admin';
    const password = '123';
    const name = document.getElementById('TopshiqNomi').value;
    const description = document.getElementById('izoh').value;
    const file = document.getElementById('file-input').files[0];

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', file);

    fetch('https://eduhemisuz.pythonanywhere.com/add_task/', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
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