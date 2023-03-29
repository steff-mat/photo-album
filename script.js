const body = document.getElementById('body');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const imgs = document.getElementsByClassName('img');
const switcher = document.getElementById('switcher');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const nameTag = document.getElementById('name');
const snowWhite = '#F3F6FB';
const charcoalBlack = '#212121';
const cheeseOrange = 'rgba(255, 166, 0, 0.7)';
const boeingBlue = 'rgba(0,57,166, 0.7)';
const nardoGray = '#686A6C';

function day() {
  body.style.backgroundColor = snowWhite;
  body.style.color = snowWhite;
  header.style.background = charcoalBlack;
  footer.style.background = charcoalBlack;
  light.style.backgroundColor = cheeseOrange;
  dark.style.backgroundColor = nardoGray;
}

function night() {
  body.style.backgroundColor = charcoalBlack;
  body.style.color = charcoalBlack;
  header.style.background = snowWhite;
  footer.style.background = snowWhite;
  light.style.backgroundColor = nardoGray;
  dark.style.backgroundColor = boeingBlue;
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
  if (light.style.backgroundColor === cheeseOrange) {
    night();
    nameTag.style.color = boeingBlue;
  } else {
    day();
    nameTag.style.color = cheeseOrange;
  }
});
