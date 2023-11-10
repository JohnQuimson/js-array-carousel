'use strict';

/*
Quello che vogliamo andare a creare con JS è:
<div class="item">
  <img src="img/arrayImages[i]" alt="" />
</div>

*/

const arrayImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const slider = document.querySelector('.items');
//dichiaro quale slide[i] deve avere la class 'active'
let slideAttivaIndex = 0;

for (let i = 0; i < arrayImages.length; i++) {
  const elementSlide = document.createElement('div');
  elementSlide.classList.add('item');

  if (i === slideAttivaIndex) {
    elementSlide.classList.add('active');
  }

  const elementImg = document.createElement('img');
  elementImg.src = `img/${arrayImages[i]}`;
  elementImg.alt = `img ${arrayImages[i + 1]}`;

  elementSlide.append(elementImg);
  slider.append(elementSlide);
}
