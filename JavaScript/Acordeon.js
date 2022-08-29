'use strict'
const bloque = document.querySelectorAll('.bloque');
const h2     = document.querySelectorAll('.h2');

//cuando haga click en cada una de las etiquetas h2, van a ocurrir cosas 
//como quitar la case activo de todos los bloques

h2.forEach((cadaH2 , i )=>{
 h2[i].addEventListener('click', ()=>{
    bloque.forEach ((cadenaBloque , i)=>{
        bloque[i].classList.remove('activo')
    })
    bloque[i].classList.add('activo')
 })
})

const botones = document.querySelectorAll('.botones');
const h1     = document.querySelectorAll('.h1');

h1.forEach((cadaH1 , a )=>{
    h1[a].addEventListener('click', ()=>{
        botones.forEach ((cadenasbotones , a)=>{
            botones[a].classList.remove('activo1')
       })
       botones[a].classList.add('activo1')
    })
})
/*Funcion cambio de color*/
let btn_dark = document.getElementById('btdark');
let btn_white = document.getElementById('btgreen');
let box=document.querySelector('.bloque');

function ChangeColorBtn(){
    if(btn_dark.value == "black"){
        box.style.background = btn_dark.value;
        console.log(btn_dark)
    }
}

function ChangeColorBtn2(){
    if(btn_white.value == "green"){
        box.style.background = btn_white.value;
        console.log(btn_white)
    }
}