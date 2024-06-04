#! /usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer";

console.log(chalk.bold.magenta("\n<<<<< Wellcome To The FaizCode Number Guesting Game >>>>\n"));

console.log("\t\t  -=====   =       ===");
console.log("\t\t =         =        =");
console.log("\t\t =         =        =");
console.log("\t\t  -=====   =====   === ");

let randomNumber = Math.floor(Math.random() * 6 + 1);

let myloop = true;
let attemp = 1;

while (myloop) {
  let userInput = await inquirer.prompt([
    {
      name: "userguestnum",
      type: "number",
      message: "Enter The Guest Number.",
    },
  ]);
  let { userguestnum } = userInput;
  console.log(chalk.blueBright(`\nYour Attemp No.${attemp}`));

  if (userguestnum === randomNumber) wonMatch();
  if (userguestnum > randomNumber) GreaterNum();
  if (userguestnum < randomNumber) LessNum();

  function wonMatch() {
    console.log(chalk.green(
      `\n++ Congratulation! Your Guessed Number ${userguestnum} Is Correct ++\n`)
    );
    myloop = false;
    console.log(
      chalk.greenBright(`You Have Attempted ${attemp} Times to Guess The right Number!`)
    );
  }

  function GreaterNum() {
    console.log(chalk.redBright(`\nYour Guessed Number Is Greater Than Actual Number\n`));
    attemp++;
  }

  function LessNum() {
    console.log(chalk.redBright(`\nYour Guessed Number Is Less Than Actual Number!\n`));
    attemp++;
  }
}
