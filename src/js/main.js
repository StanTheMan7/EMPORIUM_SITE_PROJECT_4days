let conectionButton = document.querySelector('.conection-formulaire');
let tabblur = Array.from(document.getElementsByClassName('blur'));
let formulaire1 = document.getElementsByClassName('conexion')[0];
let formulaire2 = document.getElementsByClassName('conexion2')[0]
let btnInscription = document.getElementsByClassName('conexionInscription')[0].lastElementChild
let btnConection = document.getElementsByClassName('conexionInscription')[1].firstElementChild
let btnExit =  document.getElementsByClassName('conexion')[0].firstElementChild.lastElementChild
btnExit.addEventListener('click', () => {
    formulaire1.style.display ='none'
    formulaire2.style.display ='none'
})
console.log(btnExit);

btnConection.addEventListener('click', ()=>{
    formulaire1.classList.toggle('noblur')
    formulaire1.style.display ='flex'
    formulaire2.classList.toggle('noblur')
    formulaire2.style.display ='none'
    

    
    
})

conectionButton.addEventListener('click', () => {
    
    formulaire1.classList.toggle('noblur')
    formulaire1.style.display ='flex'
    formulaire2.classList.toggle('noblur')
    formulaire2.style.display ='none'
        
    })
    btnInscription.addEventListener('click', () =>{
        
        formulaire2.classList.toggle('noblur')
        formulaire2.style.display ="flex";
        formulaire1.classList.toggle('noblur')
        formulaire1.style.display ='none'
    })
