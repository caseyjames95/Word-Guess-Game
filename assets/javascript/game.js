
// Variables
let winCount = 0
let lossCount = 0
let guessCount = 0
const win = true
const loss = false
const maxCount = 9
const wordSel = ['Outrun', 'Synthwave', 'DeLorean', 'Miami', 'Beach', 'Sunset', 'Ferrari']



// Looks for keystrokes
document.onkeyup = function (lguess) {
    message = MessageEvent
    console.log(lguess)
}



// Picks word or letter
const randomItem = wordSel[Math.floor(Math.random()*wordSel.length)]
document.getElementById(`gameDisplay`).innerHTML = randomItem

// Score Board
document.getElementById('guess').innerHTML = `
<h3>Guesses = ${guessCount}/9
`
document.getElementById('win').innerHTML = `
<h3>Wins = ${winCount}
`
document.getElementById('loss').innerHTML = `
<h3>Losses = ${lossCount}
`


// Game restart
if (win) {

} else {

}