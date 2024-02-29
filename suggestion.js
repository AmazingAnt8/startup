import {result, selectedQuandary} from './quandary_selection.js';
import {userQuandaries, userPairedSuggestions} from './personalize.js';

var suggestion;
function randomSuggestion() {
    for (i = 0; i < userQuandaries.length; i++) {
        if (result === userQuandaries[i][0]) {
            var length = userPairedSuggestions.length;
            suggestion = userPairedSuggestions[i][Math.floor(Math.random()) * length];
        }
    }
}

function display() {

}

function saveData() {
    //will add to database later if needed
}