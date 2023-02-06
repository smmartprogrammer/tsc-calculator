#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.pulse('Lets start calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(`
   
     
    _   _   _   _   _   _   _   _   _   _     _   _     _   _   _   _   _   _  
    / \ / \ / \ / \ / \ / \ / \ / \ / \ / \   / \ / \   / \ / \ / \ / \ / \ / \ 
   ( c | a | l | c | u | l | a | t | o | r ) ( b | y ) ( P | A | R | T | A | B )
    \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ 
    `);
}
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'operator',
            message: 'Which operation you want to perform? \n',
            choices: ['Addittion', 'Subtraction', 'Multiplication', 'Division'],
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter Number 1',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter Number 2',
        },
    ]);
    if (answers.operator == 'Addittion') {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} =  ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == 'Subtraction') {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} =  ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == 'Multiplication') {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} =  ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == 'Division') {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} =  ${answers.num1 / answers.num2}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: 'input',
                name: 'restart',
                message: 'do you want to restart it again ? Press Y',
            },
        ]);
    } while (again.restart == 'y' ||
        again.restart == 'yes' ||
        again.restart == 'YES' ||
        again.restart == 'Y');
}
startAgain();
