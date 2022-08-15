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
let secondCard = 11;
let hasBlackJack = false;
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;

// 1. Create a variable called isAlive and assign it to true
let isAlive = true;

// 2. Flip its value to false in the appropriate code block
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
    // isAlive = true;
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true;
} else {
    console.log("You're out of the game! 😭")
    isAlive = false;
}


// CASH OUT!

console.log(hasBlackJack)

// 3. Log it out to check that you're doing it right
console.log(isAlive)