const header = document.querySelector("[data-header");
const overlay = document.querySelector("[data-overlay");
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector("[data-menu");
// const navTogglers = document.querySelectorAll("[data-nav-toggler");

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
});

menuLinks.addEventListener("click", function() {
    menuLinks.classList.remove("active");
    menu.setAttribute("class", "navbar__toggle");
    overlay.classList.remove("active");
});


// =========== Scroll Reveal Animation ============
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animation Repeat
});

sr.reveal(`.hero__data, .explore__content, .footer`);

sr.reveal(`.card`, {
    delay: 600,
    distance: '100px',
    interval: 100,
});

sr.reveal(`.about__content, .join__img`, {
    origin: 'right',
});

sr.reveal(`.about__img, .join__content`, {
    origin: 'left',
});

sr.reveal(`.card__data`, {
    interval: 200,
});

// ============ Show Scroll Up =============
const scrollUp = () => {
    const scroll = document.getElementById("scroll-up");
    this.scrollY >=350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)