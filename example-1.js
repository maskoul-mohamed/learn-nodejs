const readline = require("readline");

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInput.question('please enter a: ', (answere1) => {
    userInput.question('please enter b: ', (answere2) => {
        let result = (+answere1) + (+answere2);
        console.log(`The sum is: ${result}`);
        userInput.close();
    })
})