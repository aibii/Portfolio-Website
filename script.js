particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 0;
const size = images[0].clientWidth;

nextBtn.addEventListener('click',()=>{
  if (counter >= images.length - 1) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
  if (counter <= 0) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Loop back to start/end
slide.addEventListener('transitionend', () => {
  if (images[counter].id === 'lastClone') {
    slide.style.transition = "none";
    counter = images.length - 2;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (images[counter].id === 'firstClone') {
    slide.style.transition = "none";
    counter = images.length - counter;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
