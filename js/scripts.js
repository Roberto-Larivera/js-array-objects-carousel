//console.log('int ok');
const imagesCarousel = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

  const before = document.querySelector('.before');
  const after = document.querySelector('.after');

  const slides = document.querySelector('.slides');
  const preview = document.querySelector('.preview'); //overlay 2


  let currentSlide = 0

  createdSlide ();

  const allSlide = document.querySelectorAll('.slide');
const allOverlay = document.querySelectorAll('.overlay') //overlay 2

  allSlide[0].classList.add('active');
allOverlay[0].classList.add('ms-d-none'); //overlay 2


const autoplay = setInterval(() =>{
  if( currentSlide < (imagesCarousel.length - 1)){
    allSlide[currentSlide].classList.remove('active');
    allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
    console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
    
    currentSlide ++;
    
    allSlide[currentSlide].classList.add('active');
    allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
    console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
  }
  else{
    allSlide[currentSlide].classList.remove('active');
    allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
    console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
    
    currentSlide = 0;
    
    allSlide[currentSlide].classList.add('active');
    allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
    console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
  }
},3000)

after.addEventListener('click',

  function(){
    if( currentSlide < (imagesCarousel.length - 1)){
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide ++;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    else{
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide = 0;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
  }

)

before.addEventListener('click',

  function(){
    if(currentSlide > 0){
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide --;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    else{
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide = imagesCarousel.length -1;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    
  }

)












  function createdSlide (){
    // POSSIBILE MODIFICA IN CASO NON SERVONO I COLLEGAMENTI
    imagesCarousel.forEach((item , i ,arr) =>{

      slides.innerHTML += `
        <div class="slide">
          <div class="info-image">
            <h2>
                ${item.title}
            </h2>
            <p>
                ${item.text}
            </p>
          </div>
          <div class="int-image">
            <img src="${item.image}">
          </div>
        </div>`;
        preview.innerHTML += `
          <div class="box-preview">
            <div class="overlay"></div>
            <img src="${item.image}">
          </div>`
    })
  }