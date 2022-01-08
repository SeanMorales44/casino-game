const menu = {
    dealer: {
        pizza: {
            name: "Heads",
            price: 100
        },
        cheeseburger: {
            name: "Tails",
            price: 100
        },
        
    },
    player: {
        chips: {
            name: "Heads",
            price: 100
        },
        tots: {
            name: "Tails",
            price: 100
        }
    },
    player2: {
        eggs: {
            name: "Heads",
            price: 100
        },
        bacon: {
            name: "Tails",
            price: 100
        },
       
    }
}

let bill = 0

function menuDisplay(menuType) {
    console.log(`\n   ${menuType[0].toUpperCase() + menuType.slice(1)}:\n`)
    Object.keys(menu[menuType]).forEach(item => {
        let data = menu[menuType][item]
        console.log(`   ${data.name} => $${data.price.toFixed(2)}`)
    })
}

function itemSelection(menuType, promptText) {
    let userInput = prompt(`\n${promptText}`).toLowerCase()

    console.log(`The ${userInput} is a great choice!`)
    bill += menu[menuType][userInput].price
}

console.log("Welcome to the Matrix\nLet's flip coins")

menuDisplay("dealer")
menuDisplay("player")
menuDisplay("player2")

itemSelection("dealer", "Lets take your Bets?")
itemSelection("player", "Heads or Tails?")
itemSelection("player", "Dealer Wins?")
itemSelection("player", "Player Wins?")