
// inscriptio exitbn
let darkmodeBtn = document.querySelector('.night-mode')
let inverted = Array.from(document.querySelectorAll('.inverted'))
console.log(inverted);
let lightmodeBtn = document.querySelector('.light-mode')

let conectionButton = document.querySelector('.conection-formulaire');
let tabblur = Array.from(document.getElementsByClassName('blur'));
let formulaire1 = document.getElementsByClassName('conexion')[0];
let formulaire2 = document.getElementsByClassName('conexion2')[0]
let btnInscription = document.getElementsByClassName('conexionInscription')[0].lastElementChild
let btnConection = document.getElementsByClassName('conexionInscription')[1].firstElementChild
let btnExit =  document.getElementsByClassName('conexion')[0].firstElementChild.lastElementChild

let btnInscription2 = document.getElementsByClassName('conexionInscription')[1].lastElementChild
let btnConection2= document.getElementsByClassName('conexionInscription')[1].firstElementChild
let btnExitInsc =  document.getElementsByClassName('conexion')[0].firstElementChild.lastElementChild


// let img1 = Array.from(document.querySelectorAll('.img1'))

// let mybigImg = (x) =>{
//     x.style.height = '18.2rem'
//     x.style.width = '18.2rem'
// } 
// let mynormalImg = (x) =>{
//     x.style.height = '18rem'
//     x.style.width = '18rem'
// } 
// img1.forEach(element => {

//     element.addEventListener('mouseover', ()=> {
//         mybigImg();
//         mynormalImg();
//     })
// })


export {
    conectionButton,
    tabblur,
    formulaire1,
    formulaire2,
    btnInscription,
    btnExit,
    btnConection,
    btnInscription2,
    btnConection2,
    btnExitInsc,
    lightmodeBtn,
    darkmodeBtn,
    inverted
   
}