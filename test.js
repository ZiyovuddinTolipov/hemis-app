// Modal oynani ochish uchun JavaScript
var openModalButton = document.querySelector('[data-target="#myModal"]');
openModalButton.addEventListener('click', function() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
});

// Modalni yopish uchun JavaScript
var closeModalButton = document.querySelector('.close');
closeModalButton.addEventListener('click', function() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
});