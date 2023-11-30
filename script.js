function uploadImage() {
    const input = document.getElementById('imageInput');
    const img = document.getElementById('uploadedImage');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}