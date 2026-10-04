let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.innerWidth <= 900) {

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Bajando
            header.classList.add('navbar-hidden');
        } else {
            // Subiendo
            header.classList.remove('navbar-hidden');
        }

        lastScrollY = currentScrollY;
    }

});