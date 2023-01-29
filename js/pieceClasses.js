/*
Author: Daniel Cronauer
Date: 1/29/2023
File: pieceClasses.js
Purpose: Define piece class and its derived classes.
*/

class Piece {
    // instance variables
    #moved;
    #position;
    #type;
    #color;
    #range;
    #mType;
    #imageHTML;
    #possibleMoves = new Map();
    // constructor
    constructor(position,type,color,range,mType,image)
    {
        this.#moved = false;
        this.#position = position;
        this.#type = type;
        this.#color = color;
        this.#range = range;
        this.#mType = mType;
        this.#imageHTML = image;
    }
    //getter
    getPosition()
    {
        return this.#position;
    }
    getType()
    {
        return this.#type
    }
    getColor()
    {
        return this.#color;
    }
    getMoved()
    {
        return this.#moved;
    }
    getRange()
    {
        return this.#range;
    }
    getMtype()
    {
        return this.#mType;
    }
    getImage()
    {
        return this.#imageHTML;
    }

    getMoves()
    {
        return this.#possibleMoves;
    }
   
    //methods
    addPieceBoard()
    {
        console.log("called addPieceBoard");
        let tile = $("#"+this.getPosition());
        console.log(tile, this.getImage());
        tile.append(this.getImage());
    }

    // setPossible moves
    setPossibleMoves()
    {
        let pos = this.getPosition();
        switch(mthis.getMtype())
        {
            case "diagonal":
                
                break;
            case "bidirectional":
                this.upMoves(pos);
                this.downMoves(pos);
                console.log(this.#possibleMoves);
                break;
            case "omnidirectional":
               
                break;
            case "forward":
                
                break;
            case "l":
                
                break;
        }
    } 
    upMoves(pos)
    {
        let row = pos[1];
        let column = pos[0];

        let newPos ="";

        for(i = row + 1; i <= 8; ++i)
        {
            newPos = column + i;
            if($("#"+newPos).children().length == 0)
            {
                this.#possibleMoves.set(newPos,true);
            } else if($("#"+newPos).children().length > 0)
            {
                console.log("conflict");
            }
        }
    }
    downMoves(pos)
    {
        let row = pos[1];
        let column = pos[0];

        let newPos ="";

        for(i = row + 1; i >= 1; --i)
        {
            newPos = column + i;
            if($("#"+newPos).children().length == 0)
            {
                this.#possibleMoves.set(newPos,true);
            } else if($("#"+newPos).children().length > 0)
            {
                console.log("conflict");
            }
        }
    }
}


// constructor(position,type,color,range,mType,imageLoc)
class Rook extends Piece {
    
    constructor(position,color)
    {
        let imageLoc = "";
        if(color == "white")
            imageLoc = '<img src="./images/white_r.png" alt="" draggable="true" class="piece" data-pos="'+ position + '">';
        else if (color == "black")
            imageLoc = '<img src="./images/black_r.png" alt="" draggable="true" class="piece" data-pos="'+ position + '">';
        super(position,"rook",color,8,"bi",imageLoc);
        super.addPieceBoard();
    }
}