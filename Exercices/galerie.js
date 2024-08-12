const thumbnails = document.querySelectorAll('.thumbnail');
for(let thumb of thumbnails) {
    thumb.addEventListener('click', function(event) {
        document.querySelector('#large').src = thumb.src;
        //document.querySelector('#large').src = event.target.src;
    })
}