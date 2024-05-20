/*console.log("Navbar JS Working");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.querySelector(".mobileMenu");
function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
}*/
const mobileMenu = document.querySelector('.mobileMenu')

function navigateToHref(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    window.location.href = href;
}

/*document.addEventListener('click', (event) => {
    let target = event.target;
    if(target !== mobileMenu) {
        console.log("Clicked off menu");
        mobileMenu.style.color = "red";
    } else if(target === mobileMenu) {
        console.log("Clicked on menu");
    }
})*/