console.log('int ok');

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

const srcImg = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
  ];
  const slides = document.querySelector('.slides');

  function createdSlide (){
    imagesCarousel.forEach((item , i ,arr) =>{
      
    })
  }
  





  let currentSlide = 0
  

  for(let i=0 ; i < srcImg.length; i++){
   slides.innerHTML += `<div class="slide"><img src="${srcImg[i]}"></div>`;
    //console.log(srcImg[currentSlide]);
  }
  
  console.log('slides',slides,typeof slides);
  
  const allSlide = document.querySelectorAll('.slide');
  
  console.log('allSlide',allSlide,typeof allSlide);
  
  allSlide[0].classList.add('active');
  
  const before = document.querySelector('.before');
  const after = document.querySelector('.after');
  
  after.addEventListener('click',
  
    function(){
      
      allSlide[currentSlide].classList.remove('active');
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide ++;
      
      allSlide[currentSlide].classList.add('active');
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
      
      before.classList.remove('ms-d-none');
      
      if(currentSlide == allSlide.length -1){
        after.classList.add('ms-d-none');
      }
      
    }
  
  )
  
  before.addEventListener('click',
  
    function(){
      
      allSlide[currentSlide].classList.remove('active');
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide --;
      
      allSlide[currentSlide].classList.add('active');
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
      
      after.classList.remove('ms-d-none');
      
      if(currentSlide == 0){
        before.classList.add('ms-d-none');
      }
    }
  
  )