/* jshint esversion: 6 */
let dragged = null;

// define tiles
let td = $("td");
//define pieces
let pieceMove = $(".piece");



console.log(pieceMove, "this is what can be moved");

pieceMove.on('dragstart',(event)=>{
    dragged = event.target;

    //console.log(dragged.innerHTML());
    
    console.log(dragged, "piece dragged");
});

//console.log(td);

td.on('dragover',(event)=>{
    event.preventDefault();
    
    
});

td.on('drop',(event)=>{
    //prevent default
    event.preventDefault();
    
    // get pos from dragged item
    let pos = dragged.dataset.pos;
    
    console.log("drop called position: ", pos);

    let piece = pieceMap.get(pos);

    console.log(piece);

    piece.setPossibleMoves();
    console.log(piece.getMoves(), "drop function");


    let occupied;
   

    //$targetTile = $()
    //move to selected drop target
    if(event.target.classList.contains('tile'))
    {
        let pos = event.target.id;
        let tile = $("#"+pos);
        
        console.log("this is the position tile: ", pos);
        
        console.log(tile.children().children, "tile test");
        if(tile.children().length == 0)
        {
            console.log("empty, move piece");
            pieceMap.set(piece.getPosition(), false);
            piece.setPosition(pos);
            pieceMap.set(pos,piece);
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        } else if(tile.children.length > 0)
        {
            //time to destroy chess piece
            occupied = pieceMap.get(pos);
            console.log(occupied, "piece to be eaten");
            pieceMap.set(piece.getPosition(),false);
            piece.setPosition(pos);
            pieceMap.set(pos,piece);
            dragged.parentNode.removeChild(dragged);
            tile.empty();
            tile.append(dragged);
        }
    } else if(event.target.classList.contains('piece'))
    {
        console.log("got into piece take");
    }
    console.log(pieceMap);
});


function drag(ev)
{
    ev.dataTransfer.setData("text",ev.target.id);
    console.log("entered drag");
}

console.log('page loaded');