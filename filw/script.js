const form = document.getElementById('file-upload-form');
// const fileInput = document.getElementById('file-input');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Form gönderimini engelleyin

//   const file = fileInput.files[0]; // Yüklenen dosyayı alın

//   const formData = new FormData();
//   formData.append('file', file); // FormData nesnesine dosyayı ekleyin

//   fetch('https://eduhemisuz.pythonanywhere.com/add_task/', {
//     method: 'POST',
//     body: formData,
//     headers: {
//           "Authorization":'Basic '+ btoa("Admin"+":"+"123")
//         }
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log('Yükleme tamamlandı:', response);
//       // Yükleme tamamlandığında yapılacak işlemleri burada gerçekleştirin
//     })
//     .catch(error => {
//       console.error('Hata:', error);
//     });
// });
// const fileInput = document.getElementById('file-input');
// const url = 'https://eduhemisuz.pythonanywhere.com/add_task/';

// const formData = new FormData();
// formData.append('file', fileInput.files[0]);

// fetch(url, {
//   method: 'POST',
//   body: formData,
//   headers: {
//               "Authorization":'Basic '+ btoa("Admin"+":"+"123")
//             }
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

var url = 'https://eduhemisuz.pythonanywhere.com/add_task/'; // Replace with the URL of your API endpoint
// var token = '9e4eb100efbb677fcc4048634af28ef05a7c6eb2'; // Replace with your actual basic token
var token = 'Admin:123'; // Replace with your actual basic token
form.addEventListener('submit', function(event) {
      event.preventDefault(); // Form gönderimini engelleyi
    var fileInput = document.getElementById('file-input'); // Assuming you have an input element of type 'file' with id 'file-input'
    var file = fileInput.files[0]; // G
    // et the selected file from the file input
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(token));
    
var formData = new FormData();
formData.append('file', file);


fetch(url, {
  method: 'POST',
  headers: headers,
  body: formData
})
  .then(response => {
    // Handle the response from the API
    console.log('Response:', response);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
});