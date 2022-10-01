const menu__botao = document.getElementById('botao-menu');
const menu__lateral = document.getElementById('menu-lateral');

// function mostrarMenu(){
//     menu__lateral.classList.toggle('menu-lateral__ativo');
// }

menu__botao.addEventListener('click', () => {
    menu__lateral.classList.toggle('menu-lateral__ativo');
})

const botao__categoria = document.getElementById('botao__categoria');
const lista__categoria = document.getElementById('categoria__mobile');

botao__categoria.addEventListener('click', () => {
    lista__categoria.classList.toggle('abrir__categoria');

    if(lista__categoria.classList.contains('abrir__categoria')){
        botao__categoria.style.background =' linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)';
        botao__categoria.style.color='#ffffff';
    }else{
        botao__categoria.style.background ='#ffffff';
        botao__categoria.style.color='#000000';
    }
    
})