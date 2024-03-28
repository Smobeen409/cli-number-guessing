#! usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
{
    name:"number",
type:"number",
message:"enter your number",


}
]);
console.log("\n\n\t\tWelcome To Cli-guessing-no-game\n\n\\t\t");
const guess_no=Math.floor(Math.random()*10);
if(guess_no===answer.number){
    console.log("congratulations you guessed true no.");
}else{
    console.log("your guessed number is not correct.");
};