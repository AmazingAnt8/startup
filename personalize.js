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

export var userQuandaries = [["Overstimulated", 2], ["Understimulated", 3], ["Anxious", 1], ["Lethargic", 1]]
export var userPairedSuggestions = [["Listen to calming music", "Hug a squishmallow"], ["Play marimba", "Dance", "Play a round of MarioKart"], 
    ["Listen to calming music"], ["Go for a walk"]]

const newQuandary = document.querySelector("#new_quandary");
const quandarySave = document.getElementById("quandary_save");
quandarySave.addEventListener("click", function addNewQuandary() {
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
})

function addNewSuggestion() {

}