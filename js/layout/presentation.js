var title = document.getElementById("presentation__title");
var items = [];
for(i=0; i<3; i++){
    items[i] = document.getElementById("item-" + i);
}

var timer = setInterval(function(){
  if(window.pageYOffset >= 100){
    title.style.animationName = "title-show";
    title.style.opacity = "1";
  }
  if(window.pageYOffset >= 300){
    for(i=0; i<3; i++){
        items[i].style.animationName = "item-show";
        items[i].style.opacity = "1";
    }
    clearInterval(timer);
  }
}, 300);