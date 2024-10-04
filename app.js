//                  .... QUESTION 1 ....
// function performOperations() {
//     let number = parseFloat(document.getElementById("userNumber").value);
//     let roundedValue = Math.round(number);
//     let floorValue = Math.floor(number);
//     let ceilValue = Math.ceil(number);
//     let result = `
//         Number: ${number}<br>
//         Round off value: ${roundedValue}<br>
//         Floor value: ${floorValue}<br>
//         Ceil value: ${ceilValue}`;
//     document.getElementById("result").innerHTML = result;
// }

//                  .... QUESTION 2 ....
// function performOperations() {
//     let number = parseFloat(document.getElementById("userNumber").value);
//     let roundedValue = Math.round(number);
//     let floorValue = Math.floor(number);
//     let ceilValue = Math.ceil(number);
//     let result = `
//         Number: ${number}<br>
//         Round off value: ${roundedValue}<br>
//         Floor value: ${floorValue}<br>
//         Ceil value: ${ceilValue}
//     `;
//     document.getElementById("result").innerHTML = result;
// }

//                  .... QUESTION 3 ....
// function calculateAbsolute() {
//     let number = parseFloat(document.getElementById("userNumber").value);
//     let absoluteValue = Math.abs(number);
//     document.getElementById("result").innerHTML = `The absolute value of ${number} is ${absoluteValue}`;
// }

//                  .... QUESTION 4 ....
// function rollDice() {
//     let diceValue = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("diceResult").innerHTML = `Random dice number: ${diceValue}`;
// }

//                  .... QUESTION 5 ....
// function tossCoin() {
//     let coinValue = Math.floor(Math.random() * 2) + 1;
//     let coinSide = (coinValue === 2) ? "HEADS" : "TAILS";
//     document.getElementById("result").innerHTML = `Random coin value: ${coinValue} (${coinSide})`;
// }

//                  .... QUESTION 6 ....
// function generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("result").innerHTML = `Random number between 1 and 100: ${randomNumber}`;
// }

//                  .... QUESTION 7 ....
// function askWeight() {
//     let weightInput = prompt("Please enter your weight (e.g., '50', '50 kgs', '50.2 kgs', '50.2 kilogram'):");
//     let weight = parseFloat(weightInput);
//     if (!isNaN(weight)) {
//         document.getElementById("result").innerHTML = `The weight of the user is ${weight} kilograms.`;
//     } else {
//         document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number for weight.";
//     }
// }

//                  .... QUESTION 8 ....
function guessSecretNumber() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let userInput = parseInt(prompt("Enter a number between 1 and 10:"));
    if (userInput === secretNumber) {
        document.getElementById("result").innerHTML = `Congratulations! You guessed the secret number: ${secretNumber}.`;
    } else {
        document.getElementById("result").innerHTML = `Sorry, the secret number was ${secretNumber}. Try again!`;
    }
}