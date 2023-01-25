let arrayColumns = ["A","B","C","D","E","F","G","H"];
let arrayRows = [1,2,3,4,5,6,7,8];
let board = $("#boardBody");

function createWhiteBoard(arrayColumns,arrayRows){
    arrayRows.reverse();
    
    for (const row of arrayRows) {
        let tr = board.append("<tr class=" + row +"></tr>");
        for (const column of arrayColumns) {
            console.log(tr);
        }
    }
    
}

createWhiteBoard(arrayColumns,arrayRows);