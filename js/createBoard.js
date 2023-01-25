/* jshint esversion: 6 */
// define arrays for columns and rows
let arrayColumns = ["A","B","C","D","E","F","G","H"];
let arrayRows = [1,2,3,4,5,6,7,8];
// jQuery selector for tbody element will use to append
let board = $("#boardBody");

function createWhiteBoard(arrayColumns,arrayRows){
    // if array is sorted ascending reverse to descending
    if (arrayRows[0] === 1)
        arrayRows.reverse();
    let count = 0;
    // for each row on board array make a tr element
    // and append to tbody
    for (const row of arrayRows) {
        let tr = board.append("<tr class=" + row +"></tr>");
        
        if (row%2==0)
            count = 2;
        else
            count = 1;
        //console.log("count: " + count + "row: " + row);
        for (const column of arrayColumns) {
            //within the tr we just make we need to create
            // each td with the proper class for tile (add tile and black/white)
            if(count%2==0)
            {
                tr.append("<td class ='tile white' id='"+ column + row +"'></td>" );
            } else
            {
                tr.append("<td class ='tile black' id='"+ column + row +"'></td>" );
            }
            count++;
        }
    }
    
}

function createBlackBoard(arrayColumns,arrayRows){
    // if array is sorted ascending reverse to descending
    if (arrayRows[0] === 8)
        arrayRows.reverse();
    let count = 0;
    // for each row on board array make a tr element
    // and append to tbody
    for (const row of arrayRows) {
        let tr = board.append("<tr class=" + row +"></tr>");
        
        if (row%2==0)
            count = 2;
        else
            count = 1;
        //console.log("count: " + count + "row: " + row);
        for (const column of arrayColumns) {
            //within the tr we just make we need to create
            // each td with the proper class for tile (add tile and black/white)
            if(count%2==0)
            {
                tr.append("<td class ='tile white' id='"+ column + row +"'></td>" );
            } else
            {
                tr.append("<td class ='tile black' id='"+ column + row +"'></td>" );
            }
            count++;
        }
    }
    
}

createWhiteBoard(arrayColumns,arrayRows);
//createBlackBoard(arrayColumns,arrayRows);
let position = "A8";
let piece = '<img src="../images/black_r.png" alt="">';
function addPieceBoard(position,piece)
{
    let tile = $("#"+position);
    tile.append(piece);
}

addPieceBoard(position,tile);