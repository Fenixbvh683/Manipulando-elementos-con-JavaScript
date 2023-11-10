const body = document.body;
const titulo = document.querySelector('h1');

const respuesta = confirm('Desea modo oscuro')

if(respuesta){
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList');
}

titulo.innerText = "LISTADO DE PELICULAS"
titulo.classList.add('titulo')

