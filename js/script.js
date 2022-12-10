let moveSpan = document.querySelector("#span");
let winnerHave = false;
let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6]
]
let botMoveHave = true;
let moveNumber = 0;
let cells = document.querySelectorAll(".cell");
for (let cellNumber = 0; cellNumber < cells.length; cellNumber++) {
    cells[cellNumber].onclick = function () {
        if (cells[cellNumber].innerHTML == "" && botMoveHave == true) {
            cells[cellNumber].innerHTML = "X";
            moveSpan.innerHTML = "(Бот Олег) 0";
            moveNumber++;
            checkWinner();
            if (moveNumber < 9) {
                botMoveHave = false;
                setTimeout(() => {
                    botMove();
                }, 1500);

            }

        }
        else {
            cells[cellNumber].classList.add("error");
            setTimeout(() => {
                cells[cellNumber].classList.remove("error")
            }, 400);
        }

    }
}
function botMove() {
    if (botMoveHave == false) {
        for (let i = 0; i < 8; i++) {
            let [a, b, c] = combinations[i];
            switch (true) {
                case cells[a].innerHTML == "0" && cells[b].innerHTML == "0" && cells[c].innerHTML == "":
                    if (botMoveHave == false) {
                        cells[c].innerHTML = "0";
                        moveSpan.innerHTML = "(Вы) X";
                        botMoveHave = true;
                        moveNumber++;
                        checkWinner();
                        break;
                    }
                case cells[a].innerHTML == "" && cells[b].innerHTML == "0" && cells[c].innerHTML == "0":
                    if (botMoveHave == false) {
                        cells[a].innerHTML = "0";
                        moveSpan.innerHTML = "(Вы) X";
                        botMoveHave = true;
                        moveNumber++;
                        checkWinner();
                        break;
                    }
                case cells[a].innerHTML == "0" && cells[b].innerHTML == "" && cells[c].innerHTML == "0":
                    if (botMoveHave == false) {
                        cells[b].innerHTML = "0";
                        moveSpan.innerHTML = "(Вы) X";
                        botMoveHave = true;
                        moveNumber++;
                        checkWinner();
                        break;
                    }
            }
        }
        for (let i = 0; i < 8; i++) {
            let [a, b, c] = combinations[i];
            switch (true) {
                case cells[a].innerHTML == "X" && cells[b].innerHTML == "X" && cells[c].innerHTML == "":
                    if (botMoveHave == false) {
                        cells[c].innerHTML = "0";
                        moveSpan.innerHTML = "(Вы) X";
                        botMoveHave = true;
                        moveNumber++;
                        checkWinner();
                        break;
                    }
                case cells[a].innerHTML == "" && cells[b].innerHTML == "X" && cells[c].innerHTML == "X":
                    if (botMoveHave == false) {
                        cells[a].innerHTML = "0";
                        moveSpan.innerHTML = "(Вы) X";
                        botMoveHave = true;
                        moveNumber++;
                        checkWinner();
                        break;
                    }
                case cells[a].innerHTML == "X" && cells[b].innerHTML == "" && cells[c].innerHTML == "X":
                    if (botMoveHave == false) {
                        cells[b].innerHTML = "0";
                        moveSpan.innerHTML = "(Вы) X";
                        botMoveHave = true;
                        moveNumber++;
                        checkWinner();
                        break;
                    }
            }
        }
    }
    while (botMoveHave == false) {
        let botNumber = Math.floor(Math.random() * (8 - 0 + 1) + 0);
        if (cells[botNumber].innerHTML == "") {
            cells[botNumber].innerHTML = "0";
            moveSpan.innerHTML = "(Вы) X";
            moveNumber++;
            botMoveHave = true;
            checkWinner();
        }
    }
}
function checkWinner() {
    for (let i = 0; i < 8; i++) {
        let [a, b, c] = combinations[i];
        if (cells[a].innerHTML != "" && cells[a].innerHTML == cells[b].innerHTML && cells[a].innerHTML == cells[c].innerHTML && winnerHave == false) {
            winnerHave = true;
            if (cells[a].innerHTML == "0") {
                botMoveHave = true;
                moveSpan.innerHTML = "(Вы) X";
            } else {
                botMoveHave = false;
                moveSpan.innerHTML = "(Бот Олег) 0";
            }
            setTimeout(() => {
                alert("Победил" + cells[a].innerHTML);
                for (let i = 0; i < 9; i++) {
                    cells[i].innerHTML = "";                   
                }
                moveNumber = 0;
                winnerHave = false;
                
            }, 300);
        }

    }
    if (moveNumber == 9 && winnerHave == false) {
        setTimeout(() => {
            alert("Ничья!");
            for (let i = 0; i < 9; i++) {
                cells[i].innerHTML = "";
            }
            moveNumber = 0;
            winnerHave = false;
            botMoveHave = true;
            moveSpan.innerHTML = "(Вы) X";
        }, 300);
        
        
    }
}
