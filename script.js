const validerButton = document.querySelector("#button")
const champNombre = document.querySelector("#champ")

let player2Turn = false
let player2Number;
let player1Number;
let numberOfTries = 0
let minimalNumber = 0
let maximalNumber = 50

validerButton.addEventListener("click", () => {
    gameplay()
})

function gameplay(){
    console.log(player2Turn)
    if (player2Turn){
        console.log("P2 turn")
        player2Number = champNombre.value
        console.log("P2= " + player2Number)
        didIWin(player2Number, player1Number)  
    }
    else{
        console.log("P1 turn")   
        player1Number = champNombre.value
        console.log("P1= " + player1Number)
        if (checkRange(player1Number)){
            player2Turn = true
        }
        else{
            alert("Entre 0 et 50 idiot!!!")
        }
    }
}

function didIWin(myNumber,secretNumber){
    numberOfTries += 1
    if (myNumber == secretNumber){
        console.log("You Win")
        draw(true)
        return true 
    }
    else{
        if (myNumber < secretNumber){
            console.log("Ton nombre est plus petit!")
            if (minimalNumber < myNumber){
                minimalNumber = myNumber
            }
        }
        else{
            console.log("Ton nombre est plus grand!")
            if (maximalNumber > myNumber){
                maximalNumber = myNumber
            }
        }
        draw(false)
        return false
    }
}

function checkRange(myNumber){
    if (myNumber < 0 || myNumber > 50){
        return false
    }
    else{
        return true
    }
}

function draw(gameOver){
    if (gameOver){
        document.querySelector("h1").innerText = "Bravo tu as gagné, tu as trouvé le nombre: " + player1Number
        document.querySelector("p").innerText = "Nombre d'essais: " + numberOfTries
    }
    else{
        document.querySelector("p").innerText = "Nombre d'essais: " + numberOfTries
        document.querySelector("h1").innerText = minimalNumber + " < ? < " + maximalNumber
    }
}