let list = document.querySelectorAll(".sidebard li");

function activeLink(){
    list.forEach((item)=>item.classList.remove('hovered'));

    item.classList.add('hovered');
}
list.forEach(item=>{
    item.addEventListener('mouseover',activeLink)
})


let listChild = document.querySelectorAll("li.list-item-father");
console.log('listChild',listChild)
function activeLink(){
    listChild.forEach((item)=>item.classList.remove('open'));

    item.classList.add('open');
}

listChild.forEach(item=>{
    item.addEventListener('click',activeLink)
  
})

// Creamos un listener para cada botón, y ordenamos que cambie la clase cuando se le da clic al botón
listChild.forEach(list =>{
    list.addEventListener("click",() =>{
        list.classList.toggle("open");
    })
  })
