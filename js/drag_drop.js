let grabbed = null;

// define tiles
let td = $("td");
//define pieces
let piece = $(".piece");

console.log(piece);

piece.on('dragstart',(event)=>{
    dragged = event.target;
    console.log(dragged, "piece dragged");
});

console.log(td);

td.on('dragover',(event)=>{
    event.preventDefault();
    console.log("drag over");
});

td.on('drop',(event)=>{
    //prevent default
    event.preventDefault();
    console.log("drop called", event.target.className);
    //move to selected drop target
    if(event.target.className === "white" || event.target.className === "black")
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