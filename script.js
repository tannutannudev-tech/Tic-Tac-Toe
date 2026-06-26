let currentPlayer = "X";

const boxes = document.querySelectorAll(".cell");
const turn = document.querySelector(".turn");

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {

    box.addEventListener("click", function(){

        if(box.innerHTML === ""){

            box.innerHTML = currentPlayer;

            checkWinner();

            currentPlayer = currentPlayer === "X" ? "O" : "X";

            turn.innerHTML = "Current Player : " + currentPlayer;
        }

    });

});

function checkWinner(){

    winningPatterns.forEach((pattern)=>{

        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(
            pos1 !== "" &&
            pos1 === pos2 &&
            pos2 === pos3
        ){
            alert("Winner is " + pos1);
        }

    });

}