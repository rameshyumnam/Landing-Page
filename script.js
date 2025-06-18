const bar = document.getElementById("bar");
const toggleMenu = document.querySelector(".menu-toggle");
const exitMenu = document.querySelector(".exit");

bar.addEventListener('click', () => {
    toggleMenu.style.display = "flex";
});

exitMenu.addEventListener('click', () => {
    toggleMenu.style.display = "none";
});