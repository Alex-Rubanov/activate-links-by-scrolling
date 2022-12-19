const getId = (link) => link.getAttribute('href').replace('#', '');

const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.nav-list__item-link');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(link => {
                link.classList.toggle(
                    'nav-list__item-link--active',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.7,
});
const navList = document.querySelector('.nav-list');

sections.forEach(section => observer.observe(section));

navList.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-list__item-link')) {
        e.preventDefault();

        const id = getId(e.target);

        window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: 'smooth',
        });
    }
});