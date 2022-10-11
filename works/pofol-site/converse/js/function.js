const $topContainer = document.querySelector('.top-banner-list');
const $topIndicator = document.querySelectorAll('.top-banner-list > li > a ');
const $topBtnPrev = document.querySelector('.top-banner-wrap > .slides-navigation.prev');
const $topBtnNext = document.querySelector('.top-banner-wrap > .slides-navigation.next');


let topNowIdx = 1;
let topOldIdx = topNowIdx;

$topContainer.style.transition = 'all 0.4s ease-in-out';

$topIndicator.forEach(function($indicator, idx){
    $indicator.addEventListener('click', function(evt){
        evt.preventDefault();

        topOldIdx = topNowIdx;
        topNowIdx = idx;
        console.log(`topOldIdx = ${topOldIdx}`);
        console.log(`topNowIdx = ${topNowIdx}`);

        //컨테이너 이동
        $topContainer.style.marginTop = -50*topNowIdx + 'px';
    });
});

//이전버튼
$topBtnPrev.addEventListener('click', function(evt){
    evt.preventDefault();

    topOldIdx = topNowIdx;
    topNowIdx--;

    //컨테이너 이동
    $topContainer.style.marginTop = -50*topNowIdx + 'px';

    if(topNowIdx===0){
        setTimeout(function(){
            //오른쪽 끝에 있는 슬라이드가 보이도록 이동
            $topContainer.style.transition = 'none';
            $topContainer.style.marginTop = -50*5 + 'px';

            setTimeout(function(){
              $topContainer.style.transition = 'all 0.4s ease-in-out';
            },100);
        },400);

        topNowIdx = 5;
    }//end of if
});

//다음버튼
$topBtnNext.addEventListener('click', function(evt){
    evt.preventDefault();

    topOldIdx = topNowIdx;
    topNowIdx++;

    //컨테이너 이동
    $topContainer.style.marginTop = -50*topNowIdx + 'px';

    if(topNowIdx===6){
        setTimeout(function(){
            //오른쪽 끝에 있는 슬라이드가 보이도록 이동
            $topContainer.style.transition = 'none';
            $topContainer.style.marginTop = -50*1 + 'px';

            setTimeout(function(){
              $topContainer.style.transition = 'all 0.4s ease-in-out';
            },100);
        },400);

        topNowIdx = 1;
    }//end of if
});

let topIntervalKey = null;

window.addEventListener('load', function(){
  topIntervalKey = setInterval(function(){
    $topBtnNext.click();//이벤트강제발생
  },2000);
});


//비디오
function videoUrl(url) {
  document.getElementById("video-slider").src = "media/" + url;
}


const $indicators = document.querySelectorAll('.navigation-text-wrap > .video-navigation > li > video');
const $sideBanrs = document.querySelectorAll('.video-text-wrapper');

let nowIdx = 0;
let oldIdx = nowIdx;

$indicators.forEach(function($indicator, idx){
  $indicator.addEventListener('click',function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = idx;
    //모든 슬라이드 숨김, 인디케이터 비활성화
    for(let i=0;i<$indicators.length;i++){
      $sideBanrs[i].style.display = 'none';
      $indicators[i].parentElement.classList.remove('on');
    }

    $sideBanrs[nowIdx].style.display = 'block';
    $indicators[nowIdx].parentElement.classList.add('on');

    //모든 사이드배너를 제자리로 이동
    $sideBanrs.forEach(function($sideBanr){
      $sideBanr.style.marginLeft = '-9999px';
      $sideBanr.style.display = 'none';
    });

    //슬라이드에 해당하는 사이드배너 노출
    $sideBanrs[nowIdx].style.display = 'block';
    setTimeout(function(){
      $sideBanrs[nowIdx].style.marginLeft = '';
    },400);
  });
});





//배너슬라이드
const $banercontainer = document.querySelector('.banner > .banner-wrap > .banner-slide > .banner-slide-container > .slide-wrap ');
const $bannerPrev = document.querySelector('.banner > .slides-navigation.prev');
const $bannerNext = document.querySelector('.banner > .slides-navigation.next');

let bannerNowIdx = 0;

$bannerPrev.addEventListener('click',function(evt){
  evt.preventDefault();

  if(bannerNowIdx>0){
    bannerNowIdx--;
  }else{
    bannerNowIdx=3;
  }
  $banercontainer.style.marginLeft = -1330*bannerNowIdx + 'px';
});

$bannerNext.addEventListener('click',function(evt){
  evt.preventDefault();

  if(bannerNowIdx<3){
    bannerNowIdx++;
  }else{
    bannerNowIdx=0;
  }
  $banercontainer.style.marginLeft = -1330*bannerNowIdx + 'px';
});

let nowArr = 0;
let intervalKey = null;

const autoPlay = function(){
  clearInterval(intervalKey);//인터벌 중지

  //자동실행 코드
  intervalKey = setInterval(function(){
    $bannerNext.click();        
  },5000)
};

autoPlay();




//카운트다운
const newDday = '1 jan 2023';

function countdown(){
  const newDdayDate = new Date(newDday);
  const currentDate = new Date();

  const totalSeconds = (newDdayDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? '0' + time : time;
}



setInterval(countdown, 1000);

//무한글자이동
function handleMarquee() {
  const marquee = document.querySelectorAll('.marquee');
  let speed = 2;
  let lastScrollPos = 0;
  let timer;
  marquee.forEach(function(el) {
    const container = el.querySelector('.inner');
    const content = el.querySelector('.inner > *');
    //Get total width
    const elWidth = content.offsetWidth;
    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);
    let progress = 1;
    function loop() {
      progress = progress - speed;
      if(progress <= elWidth * -1) {
        progress = 0;
      }
      container.style.transform = 'translateX(' + progress + 'px)';
      container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
      window.requestAnimationFrame(loop);
    }
    loop();
  });
  window.addEventListener('scroll', function() {
    const maxScrollValue = 12;
    const newScrollPos = window.scrollY;
    // let scrollValue = newScrollPos - lastScrollPos;
    // if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
    // else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
    // speed = scrollValue;
    clearTimeout(timer);
    timer = setTimeout(handleSpeedClear, 200);
  });
  function handleSpeedClear() {
    speed = 2;
  }
};
handleMarquee();



//GNB
const $gnbButton = document.querySelector('#showMenu');
const $gnbNav = document.querySelector('nav');

$gnbButton.addEventListener('click', function(){
  if($gnbNav.style.display==='none'){
    $gnbButton.style.right = '600px';
    $gnbNav.style.display = 'block';
 }else{
  $gnbButton.style.right = 0;
  $gnbNav.style.display = 'none';
 }
 
});

