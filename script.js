const body = document.getElementById('body');
const main = document.getElementById('main');
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
  switch (img.classList.contains('full-screen')) {
    case false:
      img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        const fullScreen = document.createElement('img');
        if (document.querySelectorAll('.full-screen').length < 1) {
          main.appendChild(overlay);
          main.appendChild(fullScreen);
          overlay.classList.add('overlay');
          fullScreen.classList.add('img');
          fullScreen.src = img.getAttribute('src');
          fullScreen.classList.toggle('full-screen');
          fullScreen.addEventListener('click', () => {
            fullScreen.remove();
            overlay.remove();
          });
        }
        console.log('click');
        document.querySelectorAll('.full-screen').length;
      });
      break;
    case true:
      location.reload();
      break;
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
