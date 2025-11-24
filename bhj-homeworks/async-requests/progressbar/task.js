document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const progress = document.getElementById('progress');
    const formData = new FormData(this);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.action, true);
    
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete;
        }
    };
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Файл успешно загружен!');
        } else {
            alert('Ошибка при загрузке файла.');
        }
    };
    
    xhr.send(formData);
});