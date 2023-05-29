var siteUrl = 'https://hemis-app.vercel.app';
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const file = document.getElementById('file').files[0];

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    fetch('https://eduhemisuz.pythonanywhere.com/books/', {
      method: 'POST',
      body: formData,

    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse response as JSON
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
      data.success = true ? location.href =  `${siteUrl}/kutubxona.html` : '';

        // console.log(data);
        // Handle the response data
      })
      .catch(error => {
        console.error(error);
        // Handle any errors
      });
  });