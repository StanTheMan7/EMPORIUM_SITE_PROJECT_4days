import{
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
    darkmodeBtn,
    lightmodeBtn,
    inverted
    
} from './sibling.js'

btnExitInsc.addEventListener('click', () =>{
        formulaire1.style.display ='none'
        formulaire2.style.display ='none'
});

btnExit.addEventListener('click', () => {
    formulaire1.style.display ='none'
    formulaire2.style.display ='none'
})
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
    
darkmodeBtn.addEventListener('click', ()=> {
    inverted.forEach(element => {
        element.classList.add('darkmode')
    })


})

lightmodeBtn.addEventListener('click', (e) => {
inverted.forEach(element => {
    element.classList.remove('darkmode')
})
})

let classImg1 = Array.from(document.querySelectorAll('.img1'))
classImg1.forEach(element=>{
    element.addEventListener('mouseover', () => {
        
            element.style.transform ='scale(1.05)'  
            element.querySelector('#hover1').style.height ='4rem'
    })
    element.addEventListener('mouseout', ()=>{

            element.style.transform ='scale(1)'
            element.querySelector('#hover1').style.height ='0rem'
    })
    
})
console.log(classImg1);
// let width1 =200;
// let difference=2;
// let interveralID = 0;
// let increase = () => {
//     interveralID=setInterval(expand , 10)
// }
// let decrease = () => {
//     interveralID=setInterval(shrink , 10)
// }
// let expand = () =>{
//     if(width1<200){
//         width1 -= difference;
//         document.getElementsByClassName('img1').style.width= width1;
//         console.log(width1);
//     }else{
//         clearInterval(interveralID)
//     }
// }
// let shrink = () =>{
//     if(width1>100){
//         width1 += difference;
//         document.getElementsByClassName('img1').style.width= width1 ;
//         console.log(width1);
//     }else{
//         clearInterval(interveralID)
//     }
// }
let navbar = document.getElementsByTagName("nav")[0]
window.addEventListener("scroll", () =>{
    if(window.scrollY > 1){
        navbar.classList.add('scroll');
    }else {
        navbar.classList.remove('scroll')
    }
});



