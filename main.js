
const { askQuestion, closeInterface } = require('./quiz');

const main = async () => {
    const name = await askQuestion('What is your name? ');
    console.log(`Hello, ${name}!`);

    const age = await askQuestion('How old are you? ');
    console.log(`You are ${age} years old.`);

    // Close the readline interface
    closeInterface();
};

main();

