

const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and wait for user input
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Main function to run the input example
const main = async () => {
    const name = await askQuestion('What is your name? ');
    console.log(`Hello, ${name}!`);

    const age = await askQuestion('How old are you? ');
    console.log(`You are ${age} years old.`);

    // Close the readline interface
    rl.close();
};

// Run the main function
main();
