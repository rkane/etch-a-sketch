
function addClass(e){
    e.target.classList.add('hovered');
}



function createGrid(size){
    const board = document.querySelector("#gameBoard");
    while (board.hasChildNodes()){
        board.removeChild(board.childNodes[0]);
    };
    for (i=0; i<(size * size); i++){
        const dimension = ((800/size) - 2) + "px";
        const box = document.createElement("div");
        box.classList.add("squareBox");
        box.setAttribute("style", `height:${dimension}; width:${dimension}`)
        board.appendChild(box);
         
    }
    const squareBoxes = Array.from(document.querySelectorAll(".squareBox"));
    squareBoxes.forEach(squareBox => squareBox.addEventListener('mouseover', addClass));
}

function shake(){
    const squareBoxes = Array.from(document.querySelectorAll(".squareBox"));
    squareBoxes.forEach(squareBox => squareBox.classList.remove("hovered"));
    let size = prompt("What size?");
    createGrid(size);
}


