'use strict';

/*
Quello che vogliamo andare a creare con JS è:
<div class="item">
  <img src="img/arrayImages[i]" alt="" />
</div>
*/

const arrayImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const slider = document.querySelector('.items');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//dichiaro quale slide[i] deve avere la class 'active'
let slideAttivaIndex = 0;

/* AGGIUNTA ELEMENTI ALL'HTML */
for (let i = 0; i < arrayImages.length; i++) {
  const elementSlide = document.createElement('div');
  elementSlide.classList.add('item');

  if (i === slideAttivaIndex) {
    elementSlide.classList.add('active');
  }

  const elementImg = document.createElement('img');
  elementImg.src = `img/${arrayImages[i]}`;
  elementImg.alt = `img ${arrayImages[i + 1]}`;

  slider.append(elementSlide);
  elementSlide.append(elementImg);
}

/* /AGGIUNTA ELEMENTI ALL'HTML */
//prendo in considerazione tutti gli elementi con class 'item', i quali vanno a finire in una specie di 'array'
const domSlides = document.querySelectorAll('.item');
console.log(domSlides);
console.log('ciao');

//Azioni al click del pulsante next
next.addEventListener('click', function () {
  if (slideAttivaIndex < domSlides.length - 1) {
    domSlides[slideAttivaIndex].classList.remove('active');
    slideAttivaIndex++;
    domSlides[slideAttivaIndex].classList.add('active');
    if (slideAttivaIndex === domSlides.length) {
      slideAttivaIndex = 0;
    }
  }
});

//Azioni al click del pulsante preview
prev.addEventListener('click', function () {
  if (slideAttivaIndex > 0) {
    domSlides[slideAttivaIndex].classList.remove('active');
    slideAttivaIndex--;
    domSlides[slideAttivaIndex].classList.add('active');
  }
});
