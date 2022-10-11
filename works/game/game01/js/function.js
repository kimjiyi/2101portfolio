    const $run = document.querySelector('.start');
    const $stop = document.querySelector('.stop');
    const $imgEyes = document.querySelector('img:nth-child(1)');
    const $imgNose = document.querySelector('img:nth-child(2)');
    const $imgLip = document.querySelector('img:nth-child(3)');


    let intervalKey = null;
  
    
    $run.addEventListener('click', function(){
      
      clearInterval(intervalKey);
      
      
      intervalKey = setInterval(function(){
        

        let rndNum = Math.floor(Math.random()*7)+1;
        let rndNum2 = Math.floor(Math.random()*7)+1;
        let rndNum3 = Math.floor(Math.random()*7)+1;


        $imgEyes.setAttribute('src', './images/eye_'+rndNum+'.png');
        $imgNose.setAttribute('src', './images/nose_'+rndNum2+'.png');
        $imgLip.setAttribute('src', './images/lip_'+rndNum3+'.png');

      },100)
    });
 
    //멈춤
    $stop.addEventListener('click', function(){
      clearInterval(intervalKey);
    });








