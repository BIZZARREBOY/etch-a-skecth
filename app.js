let color = "black";
let click = false; 

document.addEventListener("DOMContentLoaded", function (){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON"){
            click = !click;
        }
    })
    let btnSize = document.querySelector("#btn-size");
    btnSize.addEventListener("click", function() {
        let size = getSize();
        resetBoard();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let nDivs = size * size;

    for (let i = 0; i < nDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Give me a size: ");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Lets get it";
        return input;
    }
}

function colorDiv(){
    if(click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "antiquewhite");
}