let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {


    const currentScrollY = window.scrollY;

    // Siempre mostrar la navbar al llegar arriba
    if (currentScrollY <= 100) {
        header.classList.remove('navbar-hidden');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Bajando
        header.classList.add('navbar-hidden');
    } else {
        // Subiendo
        header.classList.remove('navbar-hidden');
    }

    lastScrollY = currentScrollY;
    

});