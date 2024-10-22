//init------------------
const player1Number = askPlayer()
let numberOfTries = 0
console.log("Nombre à deviner = " + player1Number)
gameplay()
//----------------------
function gameplay(){
    const player2Number = askPlayer()
    if (!(didIWin(player2Number, player1Number))){
        gameplay()
    }
}

function askPlayer(){
    const givenNumber = askNumber()
    while (givenNumber < 0 || givenNumber > 50){
        givenNumber = askNumber()
    }
    return givenNumber
}

function askNumber(){
    const myNumber = prompt("Donne moi un nombre entre 0 et 50")
    console.log("Nombre donné = " + myNumber)
    return myNumber
}

function didIWin(myNumber,secretNumber){
    numberOfTries += 1
    draw(false)
    if (myNumber == secretNumber){
        console.log("You Win")
        draw(true)
        return true 
    }
    else{
        if (myNumber < secretNumber){
            console.log("Ton nombre est plus petit!")
        }
        else{
            console.log("Ton nombre est plus grand!")
        }
        return false
    }
}

function draw(gameOver){
    if (gameOver){
        document.querySelector("h1").innerText = "Bravo tu as gagné, tu as trouvé le nombre: " + player1Number
        document.querySelector("p").innerText = "Nombre d'essais: " + numberOfTries
    }
    else{
        document.querySelector("p").innerText = "Nombre d'essais: " + numberOfTries
    }
}
