var apiUrl = 'https://eduhemisuz.pythonanywhere.com'; // API ning manzili
var endpoint = '/home/'; // Olish kerak bo'lgan ma'lumotlar manzili
// localStorage.setItem('loginUsername', "9e4eb100efbb677fcc4048634af28ef05a7c6eb2")
// Tokenni olish
// var token = localStorage.getItem('token'); // yoki tokenni olish uchun muvofiqlashtirilgan usulni ishlatish
const loginUsername = 'userbek';
const loginPassword = 'Qwerty4321'

fetch(apiUrl + endpoint, {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + btoa(loginUsername + ':' + loginPassword),
        'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      var items = data.slice(2, 6); // 2-dan 5-gacha bo'lgan malumotlarni kesib olamiz
  
      // Oynaga chiqarish
      var container = document.getElementById('container'); // Chiqarish uchun mos elementni toping yoki o'zingizning elementingizga moslashtiring
      items.forEach(item => {
        var div = document.createElement('div');
        div.innerHTML =`${item.name}`;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Xatolik yuz berdi:', error);
    });
