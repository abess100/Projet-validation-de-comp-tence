let burger = document.querySelector('.burger')
let menu = document.querySelector('menu-elt')

burger.addEventListener('click',affiche) 

function affiche(){
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display='block'
    }
    console.log('non');
}

console.log('bonjourr');