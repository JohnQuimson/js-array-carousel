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
const container = document.querySelector('.container');
//dichiaro quale slide[i] deve avere la class 'active'
let slideAttivaIndex = 0;

/*
-------------------------
AGGIUNTA ELEMENTI ALL'HTML
-------------------------
 */

//AGGIUNTA DIV CON IMG
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
//AGGIUNTA THUMBNAILS
//creo un elemento div con classe raccolta-thumbnails dentro container
const raccolta = document.createElement('div');
raccolta.classList.add('raccolta-thumbnails');

container.append(raccolta);

//prendo in considerazione tutti gli elementi con class 'item', i quali vanno a finire in una specie di 'array'
const domSlides = document.querySelectorAll('.item');
let lunghDomSlides = domSlides.length - 1;

/*
-------------------------
Azioni al click del pulsante next
-------------------------
 */
next.addEventListener('click', function () {
  //Di default rimuovo la classe active al primo elemento
  domSlides[slideAttivaIndex].classList.remove('active');

  //se il contatore del NodeList è minore del num di elementi dei NodeList, incrementa il contatore
  if (slideAttivaIndex < lunghDomSlides) {
    slideAttivaIndex++;

    //se il contatore supera il limite, torna da capo
  } else {
    slideAttivaIndex = 0;
  }

  domSlides[slideAttivaIndex].classList.add('active');
  console.log('next');
  console.log(`Immgine con 'active': domSlides[${slideAttivaIndex}]`);
});

/*
-------------------------
Azioni al click del pulsante prev
-------------------------
 */
prev.addEventListener('click', function () {
  domSlides[slideAttivaIndex].classList.remove('active');

  if (slideAttivaIndex > 0) {
    slideAttivaIndex--;
  } else {
    slideAttivaIndex = lunghDomSlides;
  }
  domSlides[slideAttivaIndex].classList.add('active');
  console.log('prev');
  console.log(`Immgine con 'active': domSlides[${slideAttivaIndex}]`);
});
