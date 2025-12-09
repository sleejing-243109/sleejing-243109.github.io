const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;";
        document.body.style.overflow = 'hidden';
    } else {
        toggleButton.innerHTML = "&#9776;";
        document.body.style.overflow = 'auto';
    }
});