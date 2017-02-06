const openMap = document.querySelector('.open-map');
const map = document.querySelector('.map');
const closeBtn = map.querySelector('.cross')

function popupMap(e){
  e.stopPropagation();
  if(map.style.display==="flex"){
    map.style.display="none";
  }
  else{
    map.style.display = "flex"
  }
}
openMap.addEventListener('click',popupMap);
closeBtn.addEventListener('click',popupMap);
map.addEventListener('click',popupMap);
