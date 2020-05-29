
/*
    == Cards == 
    DragStart - Fired when the drags start
    Drag      - As the element is bening dragged around.
    DragEnd   - Fired when the drag stops
*/

/* Help */
function log(message) 
{  
    console.log('> '+ message);
}

/* App */
const cards     = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/* The functions about our cards */
cards.forEach(card => 
{
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});


function dragstart()
{
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag()
{
    // log("Card drag");
}

function dragend()
{
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

/* 
    Place where will drop cards

    === Dropzone === 
    Dragenter - When the mouse enters the boundaries of an element
    DragOver  - As the element is being dragged over another element
    DragLeave - When the mouse exists the boundaries of an element
    Drop      - Fired when the element is being dropped

*/

dropzones.forEach(dropzone => 
{
    dropzone.addEventListener('dragenter', dragenter)  
    dropzone.addEventListener('dragover', dragover)  
    dropzone.addEventListener('dragleave', dragleave)  
    dropzone.addEventListener('drop', drop)  
})

function dragenter()
{
    log("Dropzone start");
}

function dragover()
{
    // log("Dropzone over");
    this.classList.add('over')

    //Get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}

function dragleave()
{
    this.classList.remove('over')
}

function drop()
{
    this.classList.remove('over')
}