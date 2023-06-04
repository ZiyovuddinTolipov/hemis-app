
let apiUrl = 'https://eduhemisuz.pythonanywhere.com';
let endpoint = '/getwork/';
let siteUrl = 'https://hemis-app.vercel.app';
// let siteUrl = 'file:///C:/Users/User/Desktop/Ziyovuddin/hemis-app';

let token = localStorage.getItem('token');
let send_s = localStorage.getItem('send_s');

let container = document.getElementById('teacher-page');
console.log(token);
function errorMsg() {
    let tr = document.createElement('tr');
    tr.innerHTML = `<h1>Uzur xatolik</h1>`
    container.appendChild(div);
}
let myHeaders = new Headers();
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
                let tr = document.createElement('tr');
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
    // console.log('Boshqa funksiya ichidagi qiymat:', value, rat);
    if (0 <= rat <= 10) {
        let myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "task_id": value,
        "rate": rat
    });

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eduhemisuz.pythonanywhere.com/send_work/", requestOptions)
        .then(response => response.json())
        .then(result => 
            result.status =="Done" ?  location.reload() : console.error(result)
            // console.log(result)
        )
        .catch(error => console.log('error', error));
    } else {
        alert('10 dan kichik son kiriting');
    }
       
}