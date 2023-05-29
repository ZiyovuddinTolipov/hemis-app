
    var apiUrl = 'https://eduhemisuz.pythonanywhere.com';
var endpoint = '/home/';
var siteUrl = 'file:///C:/Users/User/Desktop/Ziyovuddin/hemis-app'; 

var token = localStorage.getItem('token'); 
var username = localStorage.getItem('username'); 
var password = localStorage.getItem('password'); 
console.log(token);
// const loginUsername = 'userbek';
// const loginPassword = 'Qwerty4321'
// const loginUsername = 'userbek';
// const loginPassword = 'Qwerty4321'


fetch(apiUrl + endpoint, {
    method: 'POST',
    headers:{
        'Authorization': 'Basic ' + btoa(username + ':' + password),
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
                ${item.status == "Berildi" ? `<button class="btn btn-res " onclick="fileSendS(${item.id})"  > <i class="fa fa-reply"></i> Yuborish </button> ` : ' '} 
                  

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
                <a class="btn btn-res" href="#"  onclick="fileSendT(${item.id})"> <i class="fa fa-reply"></i> Yuborganlar </a>
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
function fileSendS(params) {
    localStorage.setItem('send_s', params);
    window.location.href = `${siteUrl}/student-file-upload.html`
    // confirm('jsjsjjs');
}
function fileSendT(params) {
    localStorage.setItem('send_s', params);
    window.location.href = `${siteUrl}/teacher-files.html`
    // confirm('jsjsjjs');
}