// Default is World
// Author: May (email)
const name = process.argv[2] || "World"

console.log(`Hello, ${name}!`)

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What's your name`, (myName) => {
    console.log(`Hello ${myName}!`)
    rl.close();
});