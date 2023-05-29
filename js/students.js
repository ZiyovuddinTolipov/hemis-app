
    var apiUrl = 'https://eduhemisuz.pythonanywhere.com'; // API ning manzili
var endpoint = '/home/'; // Olish kerak bo'lgan ma'lumotlar manzili
// localStorage.setItem('loginUsername', "9e4eb100efbb677fcc4048634af28ef05a7c6eb2")
// Tokenni olish
// var token = localStorage.getItem('token'); // yoki tokenni olish uchun muvofiqlashtirilgan usulni ishlatish
// const loginUsername = 'userbek';
// const loginPassword = 'Qwerty4321'
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
    var items = data.slice(1, 6); 
    var container = document.getElementById('timeline'); 
if (data[0].type == "student") {
    items.forEach(item => {
        var div = document.createElement('li');
        div.innerHTML =`
        <i class="fa bg-blue fa-check" />
        <div class="timeline-item">
            <span class="time"><i class="fa fa-star" />


            <h3 class="timeline-header ">  ${item.name} <b>|</b> <span style={{ color: "#fae8ff" }}>${item.status == "Berildi" ? item.status : item.status +" | " + item.rating}  
            </span></h3>

            <div class="timeline-body">
                   <p>
                ${item.description}
                   <br />
                </p>

                <div class="timeline-footer mt30">
                    <p class="text-mute">
                        Topshiriq fayllari </p>
                    <a class="download-item" href="${item.file}">
                        <i class="fa fa-paperclip " />${item.file_name} <span class="pull-right">74 KiB</span>
                    </a>
                </div>
                <p class="text-right">
                ${item.status == "Berildi" ? ' <a class="btn btn-res " href="#"> <i class="fa fa-reply"></i> Yuborish </a> ' : ' '} 
                  

                </p>
            </div>
        </span></div> 
        `;
        container.appendChild(div);
      });
} else {
    items.forEach(item => {
        var div = document.createElement('li');
        div.innerHTML =`
        <i class="fa bg-blue fa-check" />
        <div class="timeline-item">
            <span class="time"><i class="fa fa-star" />


            <h3 class="timeline-header ">  ${item.name}  <span style={{ color: "#fae8ff" }}>  
            </span></h3>

            <div class="timeline-body">
                   <p>
                ${item.description}
                   <br />
                </p>

                <div class="timeline-footer mt30">
                    <p class="text-mute">
                        Topshiriq fayllari </p>
                    <a class="download-item" href="${item.file}">
                        <i class="fa fa-paperclip " />${item.file_name} <span class="pull-right">74 KiB</span>
                    </a>
                </div>
                <p class="text-right">
                ${item.status == "Berildi" ? ' <a class="btn btn-res " href="#"> <i class="fa fa-reply"></i> Yuborish </a> ' : ' '} 
                  

                </p>
            </div>
        </span></div> 
        `;
        container.appendChild(div);
      });
    
}
      // Oynaga chiqarish
      
    })
    .catch(error => {
      console.error('Xatolik yuz berdi:', error);
    });
