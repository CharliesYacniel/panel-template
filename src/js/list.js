let list = document.querySelectorAll(".sidebard li");

function activeLink(){
    list.forEach((item)=>item.classList.remove('hovered'));

    item.classList.add('hovered');
}
list.forEach(item=>{
    item.addEventListener('mouseover',activeLink)
})