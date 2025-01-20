const fs = require('fs');
const readline = require('readline');
const path = require('path');
const filePath = path.join(__dirname, 'new-file.txt');

const rl = readline.createInterface(process.stdin, process.stdout);

const writeFile = fs.createWriteStream(filePath, { flags: 'a' });

const inputText = ((answer) => {
    if(answer === 'exit') {
        console.log('Exiting from input');
        rl.close();
        return;
    }
    writeFile.write(answer + '\n');
    rl.question('Input any text: ', inputText);
});

rl.on('SIGINT', () => {
    console.log('\nExiting from input');
    rl.close();
    return;
  });

rl.question('\nInput any text: ', inputText);
