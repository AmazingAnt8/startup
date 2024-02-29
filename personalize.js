// var userQuandaries = [
//     {
//         "item": "Overstimulated",
//         "numOfSuggestions": 2
//     },
//     {
//         "item": "Understimulated",
//         "numOfSuggestions": 3
//     },
//     {
//         "item": "Anxious",
//         "numOfSuggestions": 1
//     },
//     {
//         "item": "Lethargic",
//         "numOfSuggestions": 1
//     }
// ]
    
// var userPairedSuggestions = [
//     {
//         "key": "Overstimulated",
//         "suggestions": ["Listen to calming music", "Hug a squishmallow"]
//     },
//     {
//         "key": "Understimulated",
//         "suggestions": ["Play marimba", "Dance", "Play a round of MarioKart"]
//     },
//     {
//         "key": "Anxious",
//         "suggestions": ["Listen to calming music"]
//     },
//     {
//         "key": "Lethargic",
//         "suggestions": ["Go for a walk"]
//     }
// ]

var userQuandaries = [["Overstimulated", 2], ["Understimulated", 3], ["Anxious", 1], ["Lethargic", 1]]
var userPairedSuggestions = [["Listen to calming music", "Hug a squishmallow"], ["Play marimba", "Dance", "Play a round of MarioKart"], 
    ["Listen to calming music"], ["Go for a walk"]]

const newQuandary = document.querySelector("#new_quandary");
const quandarySave = document.getElementById("quandary_save");
function addNewQuandary() {
    console.log(userQuandaries[0]);
    userQuandaries.push([newQuandary.value, 0]);
    console.log(userQuandaries[4]);

    // console.log(JSON.stringify(userQuandaries));
    // let add = JSON.stringify(newQuandary);
    // userQuandaries.push(add);
    // console.log(JSON.stringify(userQuandaries));

    //oh I don't think we're actually supposed to do json yet
    // const fs = require("fs");
    // let quandaryjson = fs.readFileSync("quandaries.json", "utf-8");
    // let quandary = JSON.parse(quandariesjson);
    // quandaryjson = JSON.stringify(users);
    // quandary.push(quandaryjson);
    // fs.writeFileSync("quandaries.json", quandaryjson, "utf-8");
}

let result;
function selectedQuandary() {
    const inputs = document.getElementsByName("varRadio");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            result = inputs[i].value;
            console.log(1);
        }
    }

    let suggestion;
    randomSuggestion();
}

let suggestion;
function randomSuggestion() {
    for (i = 0; i < userQuandaries.length; i++) {
        if (result === userQuandaries[i][0]) {
            let length = userPairedSuggestions[i].length;
            num = Math.floor(Math.random() * length);
            suggestion = userPairedSuggestions[i][num];     
        }
    }
    console.log(suggestion);

    document.getElementById("selected_quandary").innerHTML = result;
    document.getElementById("random_suggestion").innerHTML = suggestion;
}

function addNewSuggestion() {
    //add this functionality later
}