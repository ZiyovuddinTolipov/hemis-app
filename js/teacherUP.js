
var apiUrl = 'https://eduhemisuz.pythonanywhere.com';
var endpoint = '/getwork/';
var siteUrl = 'https://hemis-app.vercel.app';
// var siteUrl = 'file:///C:/Users/User/Desktop/Ziyovuddin/hemis-app';

var token = localStorage.getItem('token');
var send_s = localStorage.getItem('send_s');

var container = document.getElementById('teacher-page');
console.log(token);
function errorMsg() {
    var tr = document.createElement('tr');
    tr.innerHTML = `<h1>Uzur xatolik</h1>`
    container.appendChild(div);
}
var myHeaders = new Headers();
myHeaders.append("Authorization", `Token ${token}`);


fetch(apiUrl + endpoint + send_s, {
    method: 'GET',
    headers: myHeaders,

})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.status == "error" ? errorMsg() :
            data.forEach(item => {
                var tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${item.id}</td>
                    <td><a href="${item.file}">${item.file_name}</a></td>
                    
                    <td>${item.user}</td>
                    <td> ${item.rating == false ? `<input type='number' class='input-group' id='ratingS' onchange='onchangeRat(${item.id})' max='10' required>` : item.rating}</td>
                    <td> ${item.rating == false ? `<button  class='p-1 border-0' onclick='SendRat(${item.id})'>Jo\'natish</button>` : ''}</td>
        `;
                container.appendChild(tr);
            })


        // Oynaga chiqarish

    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });
function fileSendS(params) {
    localStorage.setItem('send_s', params);
    window.location.href = `${siteUrl}/student-file-upload.html`
    // confirm('jsjsjjs');
}
function fileSendT(params) {
    localStorage.setItem('send_s', params);
    window.location.href = `${siteUrl}/student-file-upload.html`
    // confirm('jsjsjjs');
}
// let rating;
// function onchangeRat(params){
//     const ratingS = document.getElementById('ratingS').value;
//     console.log(ratingS, params);
//      rating = ratingS;
//     return rating;

// }
// console.log(rating);
// function SendRat(params) {

//     alert(ratingS+" "+params);
// }
function onchangeRat(param) {
    const ratingS = document.getElementById('ratingS').value;
    console.log('Input qiymati:', param, ratingS);

    // Boshqa funksiyada qiymatni ishlatish
    anotherFunction(param, ratingS);
}

function anotherFunction(value, rat) {
    console.log('Boshqa funksiya ichidagi qiymat:', value, rat);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "task_id": value,
        "rate": rat
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eduhemisuz.pythonanywhere.com/send_work/", requestOptions)
        .then(response => response.json())
        .then(result => 
            result.status =="Done" ?  location.reload() : console.error(result)
        )
        .catch(error => console.log('error', error));
       
}