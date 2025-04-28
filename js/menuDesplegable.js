document.addEventListener('DOMContentLoaded', function() {
    let botonMenu = document.querySelector('.fa-solid.fa-bars');
    let menu = document.querySelector('nav ul');

    botonMenu.addEventListener('click', function() {
        menu.classList.toggle('mostrar');
    });
});
