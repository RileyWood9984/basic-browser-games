function rectangularCollision({rectangle1, rectangle2}) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

let displayText = document.querySelector("#outcomeText")

function determineWinner({player, enemy, timerId}) {
    clearTimeout(timerId)
    if (player.health === enemy.health) {
        displayText.innerHTML = 'TIE!'
    } else if (player.health > enemy.health) {
        displayText.innerHTML = 'RED PLAYER VICTORY!'
    } else if (player.health < enemy.health) {
        displayText.innerHTML = 'BLUE PLAYER VICTORY!'
    }
}

let timer = document.querySelector("#timer");
let timerText = timer.innerHTML - 0
let timerId

function decreaseTimer() {
    if (timerText >= 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer.innerHTML = timerText--
    }
    if (timerText < 0) {
        determineWinner({player, enemy, timerId})
    }
}