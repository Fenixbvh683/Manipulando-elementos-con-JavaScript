console.log('Hola JS de INDEX');

const $ = id => document.getElementById(id);
const qs = e => document.querySelector(e);

const main = document.querySelector('main');

//const subtitulo = document.querySelector('.subtitulo');
const subtitulo = document.querySelector('h2');

const link = document.querySelector('.contenido a');

/*const link = document.querySelector('.subtitulo a');
console.log(link?.textContent);*/

const parrafos = document.querySelectorAll('p');

/*parrafos.forEach(parrafo => {
    console.log(parrafo.textContent);
})*/

const logoDHByQS = document.querySelector('#logo-DH');
const logoDHByID = document.getElementById('logo-DH');

const nombre = prompt('Escribi tu nombre');

/*const nombre = prompt('Escribi tu nombre');
console.log(nombre);*/

/*const nombre = prompt('Escribi tu nombre');
alert('Hola ' + nombre)*/

/*console.log($('listado').innerText);
console.log($('listado').innerHTML);*/

//subtitulo.innerText = nombre ? subtitulo.innerText + " " + nombre : subtitulo.innerText + " " + 'INVITADO'

//subtitulo.innerHTML = nombre ? subtitulo.innerHTML + nombre : subtitulo.innerHTML + 'INVITADO'

subtitulo.innerHTML += nombre ? nombre : 'INVITADO';


subtitulo.style.textTransform = 'uppercase';

//subtitulo.style.color = "red"

link.style.color = "#E51B3E"

const respuesta = confirm('Queres cambiar el Fondo de Pantalla???');

if(respuesta){
    document.body.classList.add('fondo')

    setTimeout(() => {

        const cambiarFondo = confirm('Te gusto el Fondo');
    
        if(!cambiarFondo){
            document.body.classList.remove('fondo')
        }
    
    },1500);
}

parrafos.forEach((parrafo, index) => {
    /*if((index+1) %2 === 0) {
        parrafo.classList.add('destacadoPar')
    }else{
        parrafo.classList.add('destacadoImpar')
    }*/

    parrafo.classList.add((index+1) %2 === 0 ? 'destacadoPar' : 'destacadoImpar')
});

