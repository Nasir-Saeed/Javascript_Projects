let boxes = document.querySelectorAll(".box")
let winnerContainer = document.querySelector(".winner-container")
let winnerMess = document.querySelector(".winner-msg")
let newGames = document.querySelector("#new-game")
let resetGames = document.querySelector("#reset-game")

let turn0 = true;


let pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let newGame = () => {
    turn0 = true;
    enabledBoxes();
    winnerContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener('click', function () {

        if (turn0) {
            box.innerText = "0"
            turn0 = false
        } else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true;

        checkWinner()
    })
})

let disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const winnerMessage = (winner) => {
    winnerMess.innerText = `Congratulation ...! ${winner} Won the match`
    winnerContainer.classList.remove("hide")
    disabledBoxes()
}

const checkWinner = () => {
    for (let eachPattern of pattern) {
        let position1val = boxes[eachPattern[0]].innerText
        let position2val = boxes[eachPattern[1]].innerText
        let position3val = boxes[eachPattern[2]].innerText
        if (position1val !== "" && position2val !== "" && position3val !== "") {
            if (position1val === position2val && position2val === position3val) {
                winnerMessage(position1val)
                return true;
            }
        }
    }
}






newGames.addEventListener('click', newGame)
resetGames.addEventListener('click', newGame)