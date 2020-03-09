const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "behaviordb"
})

connection.connect(function(err){
    if (err) throw err;
    appWelcome();
});

function appWelcome(){
    inquirer.prompt({
        name: "userChoice",
        type: "list",
        message: "Welcome! What would you like to do?",
        choices: ["Input data", "Create a new data set", "Find a correlation"]
    }).then(function(answer){
        console.log("You have selected: " + answer.userChoice);
        switch(answer.userChoice){
            case "Input data":
                inputData();
                break;

            case "Create a new data set":
                createTable();
                break;
            
            case "Find a correlation":
                findCorrelation();
        }
    })
}


function inputData(){
    console.log("Ready to input some data!");
    inquirer.prompt([
    {
        name: "vocalspasms",
        message: "Input vocalspasms data.",
        type: "input",
    },
    {
        name: "hoursslept",
        message: "Input hoursslept data.",
        type: "input"
    },
    {
        name: "cough",
        message: "Input cough data",
        type: "input"
    },
    {
        name: "caffeine",
        message: "Input caffeine data",
        type: "input"
    },
    {
        name: "hyperventilation",
        message: "Input hyperventilation data",
        type: "input"
    }]).then(function(answer){
        let query = "INSERT INTO mldecelbx (vocalspasm, hoursslept, caffeine, hyperventilation, cough) "
        query+= "VALUES (" + answer.vocalspasms + ", " + answer.hoursslept + ", " + answer.caffeine + ", " + answer.hyperventilation + ", " + answer.cough + ");"
        console.log(query);
    })
   connection.end();
};

function createTable(){
    console.log("Let's make a new data set!");
}

function findCorrelation(){
    console.log("Let's look for a correlation!");
}
