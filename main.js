const flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
        {x: 450, y: 50}, {x: 700, y: 350}, {x: 680, y: 400}, {x: 850, y: 650}, {x: 1300, y: 350}, {x: 680, y: 0}, {x: 600, y: 500}, {x: 1200, y: 50}, {x: window.innerWidth + 200, y: 150}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 2, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);