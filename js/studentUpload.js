const form = document.getElementById('fileUploadS');
const fileInput = document.getElementById('estudenttaskactivity-filename');

form.addEventListener('submit', event => {
    
    // const keyInput = document.querySelector('input[type="text"]');
    event.preventDefault();


    const formData = new FormData();

    formData.append('file', fileInput.files[0]);
    console.log(formData);
    // formData.append('text', keyInput.value);

    fetch(`https://eduhemisuz.pythonanywhere.com/add_task/`, {
        method: 'POST',
        body: formData
    })
        .then(response  => response.json())
        .then(response => {
          
            if ( response.success == true ) {
                alert('Yuklandi')
                // keyInput.style.borderColor = ' #ddd';
            // location.reload();

            // } else {
            //     keyInput.value= ""
            //     keyInput.classList.add('erorr');
            //     keyInput.style.borderColor = 'red';
            }

        })
        .catch(error => {
            console.error('Fayl yuklanmadi' + error.message)
        });
});
// let fileInputName = document.getElementById('up');
// let span = document.getElementById('upload');

// // Fires on file upload
// fileInputName.addEventListener('change', function (event) {

//     // Get file name
//     let fileName = fileInputName.files[0].name.slice(0, 10);
//     console.log(fileName);

//     // Update file name in span
//     span.innerText = fileName;


    
//   fileInput.addEventListener('change', (event) => {
//     const fileList = event.target.files;
    
//     for (let i = 0; i < fileList.length; i++) {
//       const file = fileList[i];
//       const fileName = file.name;
//       const fileType = file.type;
      
//       // Fayl turini tekshirish
//       if (fileType === 'application/pdf' || fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//         // Fayl muvaffaqiyatli qabul qilindi
//         console.log('Fayl qabul qilindi: ' + fileName);
//         // Fa   yl bilan kerakli amallarni bajarish
//         // ...
//       } else {
//         // Fayl qabul qilinmadi
//         console.log('Noto\'g\'ri fayl turi: ' + fileName);
//       }
//     }
//   });
// });