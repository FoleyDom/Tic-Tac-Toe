const cellElement = document.querySelectorAll('.cell')
const restartGame = document.getElementById('restart')
const winningMessage = document.querySelectorAll('.winningMessage')
let stepCount = 0
const winningCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 9],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9],
]
const dataX = []
const dataO = []

class Player {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
}

class Game {
    constructor() {
        this.playerX = new Player('X')
        this.playerO = new Player('O')
        this.currentPlayer = this.playerX.name

        console.log(this.currentPlayer)
    }

    addX() {
        for (let i = 0; i < cellElement.length; i++) {
            cellElement[i].addEventListener('click', currentStep)
        }
        let z = this.currentPlayer

        function currentStep() {
            let num = +this.getAttribute('data-ceil')
            if (!this.textContent) {
                this.innerText = z

                z === 'X'
                    ? dataX.push(num) && this.classList.add('x')
                    : dataO.push(num) && this.classList.add('o')
                if (
                    (dataO.length > 2 || dataX.length > 2) &&
                    (checkWin(dataO, num) || checkWin(dataX, num))
                ) {
                    for (let i = 0; i < cellElement.length; i++) {
                        cellElement[i].removeEventListener('click', currentStep)
                    }
                    return (message.innerText = 'Win player ' + z)
                }
                function changePlayer() {
                    z === 'X' ? (z = 'O') : (z = 'X')
                    stepCount++
                    stepCount == 9
                        ? (document.getElementById('message').innerText = 'Tie')
                        : (document.getElementById('message').innerText =
                              'The player ' + z)
                }
                changePlayer()
            }

            function checkWin(arr, number) {
                let wLen = winCombinations
                let sLen = someWinArr.length
                for (let w = 0; w < wLen; w++) {
                    let someWinArr = winCombinations[w],
                        count = 0
                    if (someWinArr.indexOf(number) !== -1) {
                        for (let s = 0; s < sLen; k++) {
                            if (arr.indexOf(someWinArr[k]) !== -1) {
                                count++
                                if (count === 3) {
                                    return true
                                }
                            }
                        }
                        count = 0
                    }
                }
            }
        }
    }

    restartGame() {
        restartGame.addEventListener('click', function () {
            restartGame.forEach((cellElement) => {
                cellElement[i].innerText = ''
            })
            // for (let i = 0; i < cellElement.length; i++) {
            //     cellElement[i].innerText = ''
            // }
            dataO = []
            dataX = []
            this.currentPlayer = 'X'
            stepCount = 0
            for (let i = 0; i < cellElement.length; i++) {
                cellElement[i].classList.remove('x', 'o')
            }
        })
    }

    // let test = new Game()
}

const game = new Game()
game.addX()
game.restartGame()
