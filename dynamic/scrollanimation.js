const root = document.body.style;

const scroll = () => {
    // Position between 0 and 1 due to division
    const position = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    root.setProperty('--scroll', position);
};

document.addEventListener('DOMContentLoaded', () => {
    scroll();
    window.addEventListener('scroll', scroll, false);
});
