let toogle= document.querySelector('.toggle')
let navigation= document.querySelector('.sidebar')
let main= document.querySelector('.main')

toogle.onclick = function(){
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}