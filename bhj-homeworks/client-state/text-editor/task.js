const editor = document.getElementById('editor');

window.onload = function() {
    const savedText = localStorage.getItem('editorContent');
    if (savedText) {
        editor.value = savedText;
    }
};

editor.addEventListener('input', function() {
    localStorage.setItem('editorContent', editor.value);
});