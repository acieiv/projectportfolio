function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    if (navbar.style.left === "-300px") {
        navbar.style.left = "0px";
    } else {
        navbar.style.left = "-300px";
    }
}
