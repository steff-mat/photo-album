const body = document.getElementById('body');
const header = document.getElementById('header');
const imgs = document.getElementsByTagName('img');
const snowWhite = '#F3F6FB';
const charcoalBlack = '#212121';

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches
) {
  body.style.backgroundColor = snowWhite;
  body.style.color = snowWhite;
  header.style.background = charcoalBlack;
} else if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  body.style.backgroundColor = charcoalBlack;
  body.style.color = charcoalBlack;
  header.style.background = snowWhite;
}

for (let img of imgs) {
  if (img.classList.contains('full-screen') === false) {
    img.addEventListener('click', () => {
      img.classList.toggle('full-screen');
    });
  }
}
