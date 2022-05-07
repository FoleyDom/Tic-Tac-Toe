const cellElement = document.querySelectorAll('.cell')
const restartGame = document.querySelectorAll('.restart')
const winningMessage = document.querySelectorAll('.winningMessage')
const stepCount = 0
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

        // console.log(this.currentPlayer)
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

                    function changePlayer() {
                        z === 'X' ? (z = 'O') : (z = 'X')
                        stepCount++
                        stepCount == 9
                            ? (message.innerText = 'Tie')
                            : (message.innerText = 'The player ' + z)
                    }
                }
            }

            function checkWin(arr, number) {
                for (let w = 0, wLen = winCombinations.length; w < wLen; w++) {
                    let someWinArr = winCombinations[w],
                        count = 0
                    if (someWinArr.indexOf(number) !== -1) {
                        for (
                            let k = 0, kLen = someWinArr.length;
                            k < kLen;
                            k++
                        ) {
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

        reset()
        {
            reset.addEventListener('click', function () {
                for (let i = 0; i < ceil.length; i++) {
                    ceil[i].innerText = ''
                }
                dataO = []
                dataX = []
                this.currentPlayer = 'X'
                stepCount = 0
                message.innerText = 'The player ' + this.currentPlayer
                for (let i = 0; i < ceil.length; i++) {
                    ceil[i].classList.remove('x', 'o')
                    // ceil[i].addEventListener("click", currentStep);
                }
            })
        }
    }

    // let test = new Game()
}

const game = new Game()
game.addX()
game.reset()