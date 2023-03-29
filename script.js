const body = document.getElementById('body');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const imgs = document.getElementsByClassName('img');
const switcher = document.getElementById('switcher');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const snowWhite = '#F3F6FB';
const charcoalBlack = '#212121';

function day() {
  body.style.backgroundColor = snowWhite;
  body.style.color = snowWhite;
  header.style.background = charcoalBlack;
  footer.style.background = charcoalBlack;
  light.style.backgroundColor = 'rgba(255, 255, 0, 0.7)';
  dark.style.backgroundColor = 'gray';
}

function night() {
  body.style.backgroundColor = charcoalBlack;
  body.style.color = charcoalBlack;
  header.style.background = snowWhite;
  footer.style.background = snowWhite;
  light.style.backgroundColor = 'gray';
  dark.style.backgroundColor = 'rgba(0, 0, 255, 0.7)';
}

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches
) {
  day();
} else if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  night();
}

for (let img of imgs) {
  if (img.classList.contains('full-screen') === false) {
    img.addEventListener('click', () => {
      img.classList.toggle('full-screen');
    });
  }
}

switcher.addEventListener('click', () => {
  if (light.style.backgroundColor === 'rgba(255, 255, 0, 0.7)') {
    night();
  } else day();
});
