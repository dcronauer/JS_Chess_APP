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
    
    console.log(dragged.pos, "piece dragged position");
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

    piece.clearPossible();

    console.log(piece);

    piece.setPossibleMoves();
    console.log(piece.getMoves(), "drop function");


    let occupied;
    let tileValid;
    let posTile;
    let tile;
    //$targetTile = $()
    //move to selected drop target
    if(event.target.classList.contains('tile'))
    {
        posTile = event.target.id;
        tile = $("#"+posTile);
        console.log(tile);
        
        console.log("this is the position tile: ", posTile);
        
        tileValid = piece.getMoves().has(posTile);

        console.log(tileValid, "this is test tile");

        console.log(tile.children().children, "tile test");
        if(tile.children().length == 0 && tileValid)
        {
            console.log("empty, move piece");
            pieceMap.set(piece.getPosition(), false);
            piece.setPosition(posTile);
            pieceMap.set(posTile,piece);
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            dragged.dataset.pos = posTile;
            console.log("updated location", dragged.dataset.pos);
        } else if(tile.children.length > 0 && tileValid)
        {
            //time to destroy chess piece
            occupied = pieceMap.get(pos);
            console.log(occupied, "piece to be eaten");
            pieceMap.set(piece.getPosition(),false);
            piece.setPosition(posTile);
            pieceMap.set(posTile,piece);
            dragged.parentNode.removeChild(dragged);
            tile.empty();
            tile.append(dragged);
            dragged.dataset.pos = posTile;
        }
    } else 
    {

        console.log("entered else ");
        posTile = event.target.dataset.pos;
        tile = $("#"+posTile);
        
        console.log("this is the position tile: ", posTile);
        
        tileValid = piece.getMoves().has(posTile);

        console.log(tileValid, "this is test piece");

        console.log(tile.children().children, "tile test")
         //time to destroy chess piece
         occupied = pieceMap.get(pos);
         console.log(occupied, "piece to be eaten");
         pieceMap.set(piece.getPosition(),false);
         piece.setPosition(posTile);
         pieceMap.set(posTile,piece);
         dragged.parentNode.removeChild(dragged);
         tile.empty();
         tile.append(dragged);
         dragged.dataset.pos = posTile;
    } 
    //piece.clearPossible();
    console.log(pieceMap);
    dragged = null;
});


function drag(ev) {
    ev.dataTransfer.setData("text",ev.target.id);
    console.log("entered drag");
 }

console.log('page loaded');