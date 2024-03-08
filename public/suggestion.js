import { result, selectedQuandary } from './quandary_selection.js';
import { userQuandaries, userPairedSuggestions } from './personalize.js';

//I'm getting an error that I "Cannot use import statement outside a module" so I'll have to figure this out later

var suggestion = selectedQuandary;
console.log(suggestion);
function randomSuggestion() {
    for (i = 0; i < userQuandaries.length; i++) {
        if (result === userQuandaries[i][0]) {
            var length = userPairedSuggestions.length;
            suggestion = userPairedSuggestions[i][Math.floor(Math.random()) * length];
        }
    }
    console.log(suggestion);
}

function display() {
    document.getElementById("selected_quandary").innerHTML = "test";
    document.getElementById("random_suggestion").innerHTML = suggestion;
}

function saveData() {
    //will add to database later if needed
}