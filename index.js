#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        name: "number",
        type: "number",
        message: "enter your number",
    }
]);
var guess_no = Math.floor(Math.random() * 10);
if (guess_no === answer.number) {
    console.log("congratulations you guessed true no.");
}
else {
    console.log("your guessed number is not correct.");
}
;
