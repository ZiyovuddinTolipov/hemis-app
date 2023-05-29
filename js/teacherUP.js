
var apiUrl = 'https://eduhemisuz.pythonanywhere.com';
var endpoint = '/getwork/';
var siteUrl = 'https://hemis-app.vercel.app';

var token = localStorage.getItem('token');
var send_s = localStorage.getItem('send_s');

console.log(token);

var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);


fetch(apiUrl + endpoint + send_s, {
    method: 'GET',
    headers: myHeaders,

})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var container = document.getElementById('teacher-page');
        data.status == "error" ?
            data.forEach(item => {
                var tr = document.createElement('tr');
                tr.innerHTML = `<h1>Uzur xatolik</h1>`
                container.appendChild(div);
            }) ?
                data.forEach(item => {
                    var tr = document.createElement('tr');
                    tr.innerHTML = `
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
                <a class="btn btn-res" href="#"  onclick="fileSendS(${item.id})"> <i class="fa fa-reply"></i> Yuborganlar </a>
                </p>
            </div>
        </span></div> 
        `;
                    container.appendChild(div);
                })
    
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
    window.location.href = `${siteUrl}/student-file-upload.html`
    // confirm('jsjsjjs');
}