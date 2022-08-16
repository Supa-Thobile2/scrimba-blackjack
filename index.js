// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// let age = 22

// // if less than 21 -> "You can not enter the club!"
// if(age<21){
//     console.log("You can not enter the club!")
// }else{
//     console.log("Welcome!")
// }
// // else            -> "Welcome!"


// // Check if the person is elegible for a birthday card from the King! (100)

// let age = 99

// // if less than 100    -> "Not elegible"
// if(age < 100){
//     console.log("Not elegible")
// } else if(age === 100){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not elegible, you have already gotten one")
// }
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"


























// 1. Create two variables, firstCard and secondCard. 
let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



// 1. Create a variable called isAlive and assign it to true


// 2. Create a startGame() function. Move the conditional

function startGame(){
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
     cardEl.textContent = "sum:" + firstCard + " " + secondCard;
 
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        // isAlive = true;
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
    sumEl.innerHTML += sum;
  
    // console.log(message);
};


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard(){
    console.log("button clicked")

    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 11;
    
    // 2. Add the new card to the sum variable
    sum += card;
    
    // 3. Call startGame()
    startGame()
}
// newCard()
// below (line 11-20) inside the body of the function.


// 2. Flip its value to false in the appropriate code block


// 1. Declare a variable called message and assign its value to an empty string



// 2. Reassign the message variable to the string we're logging out
// if (sum <= 20) {
//     message = "Do you want to draw a new card? 🙂"
//     // isAlive = true;
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack! 🥳"
//     hasBlackJack = true;
// } else {
//     message = "You're out of the game! 😭"
//     isAlive = false;
// }


// CASH OUT!

// console.log(hasBlackJack)

// // 3. Log it out to check that you're doing it right
// console.log(isAlive)

// // 3. Log it out!
// console.log(message)

