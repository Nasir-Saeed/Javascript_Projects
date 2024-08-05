
let choices = document.querySelectorAll(".image-box")
let userScore = 0;
let compScore = 0;
let userCounts = document.getElementById("user-count")
let computerCount = document.getElementById("computer-count")
let result = document.getElementById("result")
let body = document.querySelector("body")


const compGenChoice = () => {
    let game = ["rock", "paper", "scissors"]
    let number = Math.floor(Math.random() * 3)
    return game[number]
}
const gameDraw = () => {
    result.innerText = "Game is Draw"
    result.style.backgroundColor = "#0d1b2a"
    result.style.color = "white"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userCounts.innerText = userScore

        result.innerText = `You Won...! Your ${userChoice} beats ${compChoice}`
        result.style.backgroundColor = "green"
        result.style.color = "white"
        body.classList.add("bg-img")
        console.log(userWin)

    } else {
        compScore++;
        computerCount.innerText = compScore
        result.style.backgroundColor = "red"
        result.style.color = "white"
        result.innerText = `You lose...! ${compChoice} beats your ${userChoice}`
        body.classList.remove("bg-img")
        console.log(userWin)
    }

}

const playGame = (userChoice) => {
    let compChoice = compGenChoice()
    body.classList.remove("bg-img")
    console.log("Computer Generated: ", compChoice)
    if (userChoice == compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}


choices.forEach((choice) => {
    choice.addEventListener('click', function () {
        let userChoice = choice.getAttribute("id")
        console.log("User Generated: ", userChoice)
        playGame(userChoice)
    })
})