const paperPlane = document.getElementsByClassName('paper-plane');
const darrow = document.getElementById('darrow');


const flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
        {x: 450, y: 50}, {x: 700, y: 350}, {x: 680, y: 400}, {x: 850, y: 500}, {x: 1300, y: 350}, {x: 680, y: 0}, {x: 600, y: 500}, {x: 1200, y: 50}, {x: window.innerWidth + 200, y: 150}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 2, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.navlinks li')
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
        }
        });
        // Burger Animation
        burger.classList.toggle('toggle');


    });


}

navSlide();