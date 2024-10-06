

const starsContainer = document.querySelector('.starry-background');
const numberOfStars = 100; // You can change the number of stars

for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s, ${Math.random() * 10 + 5}s`; // For twinkle and move
    starsContainer.appendChild(star);
}



