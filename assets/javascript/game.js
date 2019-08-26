
// Variables
let winCount = 0
let lossCount = 0
let guessCount = 0
let lguess = 1 + guessCount
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
// function ranWord () {
//     const randomItem = wordSel[Math.floor(Math.random()*wordSel.length)]
//     console.log(word);

//     return randomItem
// }

const randomItem = wordSel[Math.floor(Math.random()*wordSel.length)]
document.getElementById(`gameDisplay`).innerHTML = randomItem

// Score Board
document.getElementById('guess').innerHTML = `
<h3>Guesses = ${guessCount}/9</h3>
`
document.getElementById('win').innerHTML = `
<h3>Wins = ${winCount}</h3>
`
document.getElementById('loss').innerHTML = `
<h3>Losses = ${lossCount}</h3>
`

// Objects

// Game restart
if (win) {

} else {

}