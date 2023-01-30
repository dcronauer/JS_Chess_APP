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

    setPosition(pos)
    {
        this.#position = pos;
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
        
        console.log("called setPossibleMoves");
        console.log(this.getMoves());
        let pos = this.getPosition();
        switch(this.getMtype())
        {
            case "diagonal":
                
                break;
            case "bi":
                console.log('entered bidirection')
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
        let row = parseInt(pos[1]);
        let column = pos[0];

        let newPos ="";
        let occupiedPiece;

        console.log(column + row, "pos up newPos: ", );
        console.log(row + 1);
        for(let i = row + 1; i <= 8; ++i)
        {
            console.log(i);
            newPos = column + i;
            console.log(newPos);
            if($("#"+newPos).children().length == 0)
            {
                this.#possibleMoves.set(newPos,true);
            } else if($("#"+newPos).children().length > 0)
            {
                console.log(newPos, " value for newPos");
                occupiedPiece = pieceMap.get(newPos);
                if(this.#color != occupiedPiece.getColor())
                {
                    this.#possibleMoves.set(newPos,true);
                    return;
                }
                else
                {
                    return;
                }
            }
        }
    }
    downMoves(pos)
    {
        let row = parseInt(pos[1]);
        let column = pos[0];
        
        let newPos ="";

        let occupiedPiece;

        for(let i = row - 1; i >= 1; --i)
        {
            newPos = column + i;
            if($("#"+newPos).children().length == 0)
            {
                this.#possibleMoves.set(newPos,true);
            } else if($("#"+newPos).children().length > 0)
            {
                
                occupiedPiece = pieceMap.get(newPos);
                console.log(occupiedPiece, "down move occupied");
                if(this.#color != occupiedPiece.getColor())
                {
                    this.#possibleMoves.set(newPos,true);
                    return;
                }
                else
                {
                    return;
                }
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