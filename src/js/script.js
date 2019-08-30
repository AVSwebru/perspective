try {
    document.querySelector(".header .search-btn").addEventListener('click', () => {
        document.querySelector(".header .search-btn").classList.toggle("show");
        document.querySelector(".header-search").classList.toggle("show");
        if (document.querySelector(".header-search").classList.contains('show')) {
            document.querySelector(".header-search .search-input").focus();
        }
    });
} catch (e) { }

document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("header-search") &&
        !e.target.classList.contains("search-btn") &&
        !e.target.parentNode.classList.contains("search-btn") &&
        !e.target.parentNode.parentNode.classList.contains("header-search")) {

        if (document.querySelector(".header .search-btn").classList.contains("show")) {
            document.querySelector(".header .search-btn").classList.remove("show");
            document.querySelector(".header-search").classList.remove("show");
        }
    }
});

let navToggle = document.querySelector('.header-nav__toggle');
let navList = document.querySelector('.header-nav__list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});