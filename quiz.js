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

// Function to close the readline interface
const closeInterface = () => {
    rl.close();
};

// Export the functions
module.exports = {
    askQuestion,
    closeInterface
};
