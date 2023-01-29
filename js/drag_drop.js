/* jshint esversion: 6 */
let dragged = null;

// define tiles
let td = $("td");
//define pieces
let pieceMove = $(".piece");

console.log(pieceMove[0], "this is the piece");

console.log(pieceMove, "this is what can be moved");

pieceMove.on('dragstart',(event)=>{
    dragged = event.target;

    //console.log(dragged.innerHTML());
    event.DataTransfer.clearData();
    
    event.DataTransfer.setData("text/plain",event.target);
    console.log(dragged, "piece dragged");
});

//console.log(td);

td.on('dragover',(event)=>{
    event.preventDefault();
    
    
});

td.on('drop',(event)=>{
    //prevent default
    event.preventDefault();
    console.log("drop called", event.target);
    console.log(event.target.attr('data-pos'));
    //$targetTile = $()
    //move to selected drop target
    if(event.target.classList.contains('tile'))
    {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
});


function drag(ev)
{
    ev.dataTransfer.setData("text",ev.target.id);
    console.log("entered drag");
}

console.log('page loaded');