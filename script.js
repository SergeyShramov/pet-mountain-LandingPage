function getOffer(button) {
    let form = document.querySelector('form');

    // toggle the display of the iframe
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    document.addEventListener('click', function(e) {
        if (!form.contains(e.target) && e.target !== button) {
            form.style.display = 'none';
            overlay.style.display = 'none';
        }
        else {
            overlay.style.display = 'block';
            form.style.display = 'block';
        }
    });
}