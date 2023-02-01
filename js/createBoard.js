/* jshint esversion: 6 */
// define arrays for columns and rows
let arrayColumns = ["A","B","C","D","E","F","G","H"];
let arrayRows = [1,2,3,4,5,6,7,8];
// jQuery selector for tbody element will use to append
let board = $("#boardBody");
let pieceMap = new Map();

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

    for (const column of arrayColumns) {
        let key = "";
        for (const row of arrayRows) {
            key = column + row;
            value = false;
            pieceMap.set(key,value);
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
let position1 = "A8";
let color = "black";

let r1 = new Rook(position1,color);
let r2 = new Rook("A1","white");

//console.log(r1.getPosition());
//console.log(pieceMap.get(r1.getPosition()));
pieceMap.set(r1.getPosition(),r1);
pieceMap.set(r2.getPosition(),r2);

console.log(pieceMap);




