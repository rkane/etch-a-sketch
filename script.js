
function addClass(e){
    console.log(e);
    e.target.classList.add('hovered');
}

function createGrid(size){
    const board = document.querySelector("#gameBoard");
    for (i=0; i<size; i++){
        const row = document.createElement("div");
        for(j=0; j<size; j++){
            const box = document.createElement("div");
            box.classList.add("squareBox");
            row.appendChild(box);
        }
        board.appendChild(row);
    }
    const squareBoxes = Array.from(document.querySelectorAll(".squareBox"));
    squareBoxes.forEach(squareBox => squareBox.addEventListener('mouseover', addClass));
}



