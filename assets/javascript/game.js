// 1:31:06
const wordSel = ['Outrun', 'Synthwave', 'DeLorean', 'Miami', 'Beach', 'Sunset', 'Ferrari']

const ranItem = function () {
    return wordSel[Math.floor(Math.random()*wordSel.length)].toLowerCase()
}

// Variables
let winCount = 0
let lossCount = 0
let guessCount = 10
let lettersGuessed = []
let word = ranItem()


const resetFun = function () {
    ranItem()
    guessCount = 10
    lettersGuessed = []
}


const displayWord = function (chosen) {
    
    let wordStr = ""
    let winStatus = true
    word.split("").forEach(function (letter) {
        if (letter === chosen || lettersGuessed.indexOf(letter) !== -1 ) {
            wordStr += `${letter} `
        } else {
            wordStr += '- '
            winStatus = false
        }
    })


    if (winStatus) {
        alert ('you won')
        winCount++
        document.getElementById('win').innerHTML = `
        <h3>Wins = ${winCount}</h3>
        `
        resetFun()
    }
    document.getElementById('gameDisplay').textContent = wordStr
}




document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (lettersGuessed.indexOf(event.key) === -1) {
            lettersGuessed.push(event.key)
            document.getElementById('letters').textContent = lettersGuessed.join(', ')
            if (word.includes(event.key)) {
                displayWord(event.key)
            } else {
                guessCount--
                document.getElementById('guess').innerHTML = `
                <h3>Guesses Left = ${guessCount}</h3>
                `
                if (guessCount <= 0) {
                    document.getElementById('loss').innerHTML = `
                    <h3>Losses = ${lossCount++}</h3>
                    `
                    alert('you lost')
                    resetFun()
                }
            }
        }
    }
}

// Displays word function at start of game
displayWord()


// Scoreboard | Input so they stay on the screen before game starts
// Guesses
document.getElementById('guess').innerHTML = `
<h3>Guesses Left = ${guessCount}</h3>
`
// Wins
document.getElementById('win').innerHTML = `
<h3>Wins = ${winCount}</h3>
`
// Losses
document.getElementById('loss').innerHTML = `
<h3>Losses = ${lossCount++}</h3>
`