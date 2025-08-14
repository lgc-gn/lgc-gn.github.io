const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

function getImageWidth() {
  return track.querySelector('img').clientWidth;
}

nextBtn.addEventListener('click', () => {
  index++;
  if (index >= track.children.length) index = 0;
  track.style.transform = `translateX(${-index * getImageWidth()}px)`;
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = track.children.length - 1;
  track.style.transform = `translateX(${-index * getImageWidth()}px)`;
});

window.addEventListener('resize', () => {
  track.style.transform = `translateX(${-index * getImageWidth()}px)`;
});
