fetch('https://eduhemisuz.pythonanywhere.com/books/')
.then( (response) => response.json()
)
.then((data) => {
    // Process the returned data and generate HTML
    var container = document.getElementById('ag-courses_box');
    console.log(data);
    var items = data.slice(1, 30)
    items.forEach((item) => {
        var div = document.createElement('div');
        div.innerHTML = `
       <div class="ag-courses_item col-4">
    <a href="${item.file}" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
           ${item.name}
        </div>

        <div class="ag-courses-item_date-box">
          
        </div>
    </a>
</div>
       `
        container.appendChild(div);
    });
})
.catch(function (error) {
    console.error('Error:', error);
});