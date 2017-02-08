const progressBar1 = document.querySelector('.line1');
const progressBar2 = document.querySelector('.line2');
const progressBar3 = document.querySelector('.line3');
const progressBar4 = document.querySelector('.line4');
var start = window.scrollY;
function scrolling(){
  var newStart = window.scrollY;
  if(start<newStart){
    var scrolled = window.scrollY;
    var docHeight = document.body.scrollHeight - window.innerHeight;
    var howMuchScrolled = Math.round((scrolled/docHeight) * 100);
    if (howMuchScrolled<=25){
      progressBar1.style.width = `${howMuchScrolled*4}`+'%';
    }
    else if(howMuchScrolled>25 && howMuchScrolled<=50){
      progressBar2.style.width = `${howMuchScrolled*4-100}`+'%';
    }
    else if(howMuchScrolled>50 && howMuchScrolled<=75){
      progressBar3.style.width = `${howMuchScrolled*4-200}`+'%';
    }
    else if(howMuchScrolled>75 && howMuchScrolled<=100){
      progressBar4.style.width = `${howMuchScrolled*4-300}`+'%';
    }
  }
  else{
    return;
  }
  start = newStart;
}
window.addEventListener('scroll',scrolling)
