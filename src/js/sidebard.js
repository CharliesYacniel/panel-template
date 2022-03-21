let list = document.querySelectorAll(".sidebard li");

function activeLink(){
    list.forEach((item)=>item.classList.remove('hovered'));

    item.classList.add('hovered');
}
list.forEach(item=>{
    item.addEventListener('mouseover',activeLink)
})

//  JS para las litas tipo acordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
} 