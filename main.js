// Target areas you want to run function.
const targetedArea = document.getElementById("wrapper");

// Code your functions you will run on swipe!
function openMenu() {
    document.getElementById("menu").classList.add("menu-active");
}

function closeMenu() {
    document.getElementById("menu").classList.remove("menu-active");
}

// Initialize fingerswipe function with 3 parameters: (direction, target, functions object)
fingerswipe("vertical", targetedArea, {
    up: closeMenu,
    down: openMenu
});