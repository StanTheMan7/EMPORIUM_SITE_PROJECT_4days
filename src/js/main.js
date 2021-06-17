let conectionButton = document.querySelector('.conection-formulaire');
let tabblur = Array.from(document.getElementsByClassName('blur'));
let addTodo = (event) => {
    
    // create div bg wight for the fomulaire 
    let divContainer = document.body.appendChild(document.createElement('div'));
    divContainer.classList.add('noblur');
    
    let buttonExit = document.divContainer.appendChild(document.createElement('button'));
    buttonExit.classList.add('buttonExit');
    buttonExit.innerText = 'X'

}
conectionButton.addEventListener('click', () => {
    tabblur.forEach(element => {
        element.style.filter ='blur(4px)';
    });
    addTodo();
})
