const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++){
  let xxx = `images/pic${i}.jpg`;
  const newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function(){
    displayedImage.setAttribute('src', xxx);
  });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
  let attribute = btn.getAttribute('class');
  const dimColor = 'rgba(0, 0, 0, 0.5)';
  const regColor = 'rgba(0, 0, 0, 0)';
  if(attribute === 'dark'){
    btn.setAttribute('class', 'light');
    overlay.style.backgroundColor = dimColor;
    btn.textContent = 'Lighten';
  }else{
    btn.setAttribute('class', 'dark');
    overlay.style.backgroundColor = regColor;
    btn.textContent = 'Darken';
  }
});
