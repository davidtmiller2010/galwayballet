// JavaScript File
const navbarSlide = () => {
    const bars = document.querySelector('.bars');
    const navbar = document.querySelector('.navbar');
    
    bars.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
    })
}

navbarSlide();