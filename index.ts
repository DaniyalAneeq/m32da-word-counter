#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


const answers : {
    Sentence : string
} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : chalk.italic("\n Enter the Sentence:")
    }
]);

const words = answers.Sentence.trim().split(" ");
console.log(words);

console.log(chalk.italic(`\n Your sentence contains ${words.length} words.`));

