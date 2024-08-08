import inquirer from "inquirer";
import chalk from "chalk";

// welcome message
console.log(chalk.bold.green('\n \t\t ******************************'));
console.log(chalk.bold.green(`*********************WELCOME TO MY ADVANTURE GAME****************************`));
console.log(chalk.bold.green('\n \t\t ******************************'));



// creat player class
class Player {
    name: string
    fuel: number = 100

    // creat class constructor
    constructor(name: string) {
        this.name = name;
    }
    fuelDecerese() {

        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}


// creat oppnonet claSS
class Opponent {
    name: string
    fuel: number = 100

    // creat constructor
    constructor(name: string) {
        this.name = name;
    }
    fuelDecerese() {

        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name:"
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent:",
        choices: ["Skeleton", "Alien", "Zoombie"]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)


do{
    // -------------------------------skeleton--------------------------------------
    if (opponent.select == "Skeleton") {
        let answers = await inquirer.prompt(
            {
                name: "opt",
                type: "list",
                message: "What Would you like to do:",
                choices:["Attack", "Drink portion", "Run for your life"]
            }
        )

        if (answers.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                p1.fuelDecerese()
                console.log(chalk.italic.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.italic.blueBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0){
                console.log(chalk.bold.bgBlue("You Loose : better luck for next time"));
                
            }

            if (num <= 0) {
                o1.fuelDecerese()
                console.log(chalk.italic.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.italic.blueBright(`${o1.name} fuel is ${o1.fuel}`));

            }
            if (o1.fuel <= 0){
                console.log(chalk.bold.bgGreenBright(`*************CONGRATS YOU WIN***************`));
                process.exit()
                
            }

        }
        if (answers.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.italic.bgCyan(`You Drink health portion Your fuel is ${p1.fuel}`));
        }
        if (answers.opt == "Run for your life") {
            console.log(chalk.italic.bgCyan("You Loose : better luck for next time"));

        }
    }

    //------------------alien---------------------------------------------
    if (opponent.select == "Alien") {
        let answers = await inquirer.prompt(
            {
                name: "opt",
                type: "list",
                message: "What Would you like to do:",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        )

        if (answers.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecerese()
                console.log(chalk.italic.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.italic.blueBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0 ){
                console.log("You Loose : better luck for next time");
                
            }

            if (num <= 0) {
                o1.fuelDecerese()
                console.log(chalk.italic.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.italic.blueBright(`${o1.name} fuel is ${o1.fuel}`));

            }
            if (o1.fuel <= 0){
                console.log(chalk.bold.bgGreenBright(`*************CONGRATS YOU WIN***************`));
                process.exit()
                
            }

        }
        if (answers.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink health portion Your fuel is ${p1.fuel}`);
        }
        if (answers.opt == "Run for your life") {
            console.log("You Loose : better luck for next time");

        }
    }
    //    -------------------------zoombie------------------------------
    if (opponent.select == "Zoombie") {
        let answers = await inquirer.prompt(
            {
                name: "opt",
                type: "list",
                message: "What Would you like to do:",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        )

        if (answers.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecerese()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (p1.fuel <= 0){
                console.log("You Loose : better luck for next time");
                
            }

            if (num <= 0) {
                o1.fuelDecerese()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);

            }
            if (o1.fuel <= 0){
                console.log(chalk.bold.bgGreenBright(`*************CONGRATS YOU WIN***************`));
                process.exit()
                
            }

        }
        if (answers.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink health portion Your fuel is ${p1.fuel}`);
        }
        if (answers.opt == "Run for your life") {
            console.log("You Loose : better luck for next time");

        }
    }
}while(true)

   




