let cp = document.querySelectorAll(".cell-a");
let currentplayer = "X";
let turn = document.querySelector(".turn");
let gameover = false;
let winnerfound = false;
const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

cp.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (gameover) {
            return;
        }
        if (cell.textContent === "") {
            if (currentplayer === "X") {
                cell.textContent = "X";
                currentplayer = "O";
            }
            else {
                cell.textContent = "O";
                currentplayer = "X";
            }
        }

        turn.textContent = " Current Player : " + currentplayer;
        winnerpattern();
        if (!gameover) {

            drawdetection();
        }
    });

function winnerpattern() {
     arr.forEach((pattern) => {
        let pos1 = cp[pattern[0]];
        let pos2 = cp[pattern[1]];
        let pos3 = cp[pattern[2]];
        if (pos1.innerText !== "" && pos1.innerText === pos2.innerText && pos2.innerText === pos3.innerText) {
            turn.textContent = "winner is : " + pos1.innerText;
            winnerfound = true;
            pos1.classList.add("winner");
            pos2.classList.add("winner");
            pos3.classList.add("winner");
            gameover = true;
            }
        });
    };
});


let restartbtn = document.querySelector(".restart");
restartbtn.addEventListener("click", () => {
    currentplayer = "X";
    turn.textContent = "Current Player : X";
    cp.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("winner");
    });
        gameover = false;
        winnerfound = false;
});

function drawdetection() {
    let boardFull = true;
    cp.forEach((cell) => {
        if (cell.textContent === "") {
            boardFull = false;
        }
    });

    if (boardFull == true && winnerfound == false) {
        turn.textContent = "Draw";
        gameover = true;
    }
}

