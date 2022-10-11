
const $container = document.querySelector('section>.slides>.slides-container');
const $mainPrev = document.querySelector('.slides>.slides-navigation.prev');
const $mainNext = document.querySelector('.slides>.slides-navigation.next');

const $indicators = document.querySelectorAll('section>.sub-slides>.sub-pagination>ul>li>a');
const $subSlide = document.querySelectorAll('section>.sub-slides>.sub-slides-container>p');
const $btnPrev = document.querySelector('.sub-slides>.sub-slides-navigation.prev');
const $btnNext = document.querySelector('.sub-slides>.sub-slides-navigation.next');

const $btnPlay = document.querySelector('.slides>.slides-auto.play');
const $btnStop = document.querySelector('.slides>.slides-auto.stop');

let nowIdx = 0;

$mainPrev.addEventListener('click',function(evt){
  evt.preventDefault();

  if(nowIdx>0){
    nowIdx--;
  }else{
    nowIdx=1;
  }
  $container.style.marginLeft = -1090*nowIdx + 'px';
});

$mainNext.addEventListener('click',function(evt){
  evt.preventDefault();

  if(nowIdx<1){
    nowIdx++;
  }else{
    nowIdx=0;
  }
  $container.style.marginLeft = -1090*nowIdx + 'px';
});


//fade 변환 공통함수

let nowArr = 0;
let intervalKey = null;

const fadeAction = function(nowArr){
  for(let i=0;i<$indicators.length;i++){
      $subSlide[i].style.display = 'none';
      $indicators[i].parentElement.classList.remove('on');
  }
  $subSlide[nowArr].style.display = 'block';
  $indicators[nowArr].parentElement.classList.add('on');
};

$indicators.forEach(function($indicator,idx){
  $indicator.addEventListener('click', function(evt){
    evt.preventDefault();

    nowArr = idx;
    fadeAction(nowArr);
  });
});


$btnNext.addEventListener('click', function(evt){
  evt.preventDefault();
  (nowArr<$indicators.length-1) ? nowArr++ : nowArr=0;
  fadeAction(nowArr);
});

$btnPrev.addEventListener('click', function(evt){
  evt.preventDefault();
  nowArr>0 ? nowArr-- : nowArr=$indicators.length-1;
  fadeAction(nowArr);
});


const autoPlay = function(){
  clearInterval(intervalKey);//인터벌 중지

  //자동실행 코드
  intervalKey = setInterval(function(){
      $btnNext.click();        
  },5000)
};

autoPlay();


