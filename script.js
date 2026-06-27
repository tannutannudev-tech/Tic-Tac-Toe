let cp = document.querySelectorAll(".cell-a");
let currentplayer = "X";
let turn = document.querySelector(".turn");
let restart = document.querySelector("#restart")
let gameover = false;
cp.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (gameover) {
            return;
        }
        if (cell.innerHTML === "") {
            if (currentplayer === "X") {
                cell.innerHTML = "X";
                currentplayer = "O";
            }
            else {
                cell.innerHTML = "O";
                currentplayer = "X";
            }

            turn.innerHTML = " Current Player : " + currentplayer;
            console.log(turn);
            winnerpattern();

        }
        function winnerpattern() {
            let arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            arr.forEach((pattern) => {
                let pos1 = cp[pattern[0]];
                let pos2 = cp[pattern[1]];
                let pos3 = cp[pattern[2]];
                if (pos1.innerText !== "" && pos1.innerText === pos2.innerText && pos2.innerText === pos3.innerText) {
                    turn.innerHTML = "winner is : " + pos1.innerText;
                    //alert("winner is : " + pos1.innerText)
                    pos1.classList.add("winner");
                    pos2.classList.add("winner");
                    pos3.classList.add("winner");
                    gameover = true;
                }
            });
        };
    });
});

restart.addEventListener("click" , () => {
        currentplayer = "X";
        turn.innerHTML = "Current Player : X";
        cp.forEach((cell) => {
            cell.innerText = "";
            cell.classList.remove("winner");
        });
        gameover = false;
    
});