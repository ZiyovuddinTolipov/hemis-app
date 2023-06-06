fetch('https://eduhemisuz.pythonanywhere.com/books/')
    .then((response) => response.json()
    )
    .then((data) => {
        // Process the returned data and generate HTML
        var container = document.getElementById('kutubxona');
        console.log(data);
        var items = data.slice(1, 30)
        items.forEach((item) => {
            var tr = document.createElement('tr');
            tr.innerHTML = `
                    <td>${item.id}</td>
                    <td><a href="${item.file}" class="ag-courses-item_link">${item.file_name}</a></td>
                    <td>${item.name}</td>
                   
       `
            container.appendChild(tr);
        });
    })
    .catch(function (error) {
        console.error('Error:', error);
    });