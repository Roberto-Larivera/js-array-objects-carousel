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

const contrPlayStop = document.getElementById('controller-play-stop');
const contrRightLeft = document.getElementById('controller-right-left');

const slides = document.querySelector('.slides');
const preview = document.querySelector('.preview'); //overlay 2


let currentSlide = 0

createdSlide ();

// const boxPreviewAll = document.querySelectorAll(".box-preview");
// console.log('ciao ciao ciao ciao',boxPreviewAll );
// boxPreviewAll.style.width=(100 / imagesCarousel.length)+'%';
//preview.style.height((100 / imagesCarousel.lenght) + '%');


const allSlide = document.querySelectorAll('.slide');
const allOverlay = document.querySelectorAll('.overlay') //overlay 2

allSlide[0].classList.add('active');
allOverlay[0].classList.add('ms-d-none'); //overlay 2

let playStopInt;
let leftRightContr = false;

contrPlayStop.addEventListener('click',
  ()=>{
    if (contrPlayStop.classList.contains("fa-play")){
      modContrPlay (contrPlayStop, "fa-play", "fa-stop");
      autoPlay();
    }
    else{
      modContrPlay (contrPlayStop, "fa-stop", "fa-play");
      autoStop ();
    }
  }
)
contrRightLeft.addEventListener('click',
  ()=>{
    if (contrRightLeft.classList.contains("fa-rotate-left")){
      modContrPlay (contrRightLeft, "fa-rotate-left", "fa-rotate-right");
      leftRightContr = true;
    }
    else{
      modContrPlay (contrRightLeft, "fa-rotate-right", "fa-rotate-left");
      leftRightContr = false;
    }
  }
)



function autoPlay (){
  
  playStopInt = setInterval(() =>{
    if (leftRightContr == true){
      if(currentSlide > 0){
        removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
        
        currentSlide --;
        
        addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
       
      }
      else{
        removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
        
        currentSlide = imagesCarousel.length -1;
        
        addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      }
    }
    else{

      if( currentSlide < (imagesCarousel.length - 1)){
        removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
        
        currentSlide ++;
        
        addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      }
      else{
        removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
        
        currentSlide = 0;
        
        addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      }
    }

  },3000)
  
}

function autoStop () {
  clearInterval(playStopInt);
};

after.addEventListener('click',

  function(){
    if( currentSlide < (imagesCarousel.length - 1)){
      removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      
      currentSlide ++;
      
      addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
    }
    else{
      removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      
      currentSlide = 0;
      
      addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
    }
  }

)

before.addEventListener('click',

  function(){
    if(currentSlide > 0){
      removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      
      currentSlide --;
      
      addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
     
    }
    else{
      removeClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
      
      currentSlide = imagesCarousel.length -1;
      
      addClassMy (allSlide, allOverlay, currentSlide, 'active', 'ms-d-none');
    }
    
  }

)


function removeClassMy (elemOne, elemTwo, i, clOne, clTwo){
  elemOne[i].classList.remove(clOne);
  elemTwo[i].classList.remove(clTwo);
}
function addClassMy (elemOne, elemTwo, i, clOne, clTwo){
  elemOne[i].classList.add(clOne);
  elemTwo[i].classList.add(clTwo);
}
function modContrPlay (elemOne, clRem, clAdd){
  elemOne.classList.remove(clRem);
  elemOne.classList.add(clAdd);
}









function createdSlide (){
  // POSSIBILE MODIFICA IN CASO NON SERVONO I COLLEGAMENTI
  imagesCarousel.forEach((item) =>{

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
      <div class="box-preview" style="${'width: '+(100 / imagesCarousel.length)+'%'}">
        <div class="overlay"></div>
        <img src="${item.image}">
      </div>`;

    
    //document.querySelector(".preview .box-preview").style.width=(100 / imagesCarousel.length)+'%';
    // const boxPreview = document.querySelector(".box-preview");
    // boxPreview.style.width=(100 / imagesCarousel.length)+'%';
  })
}