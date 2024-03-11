let result;
let chosen;
let userQuandaries = [["Overstimulated", 2], ["Understimulated", 3], ["Anxious", 1], ["Lethargic", 1]];
let userPairedSuggestions = [["Listen to calming music", "Hug a squishmallow"], ["Play marimba", "Dance", "Play a round of MarioKart"], 
    ["Listen to calming music"], ["Go for a walk"]];

async function selectedQuandary() {
    const inputs = document.getElementsByName("varRadio");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            result = inputs[i].value;
        }
    }
    console.log(result);
    // const response = await fetch('/api/selected_quandary');
    // selected_quandary = await response.value.json();
    // localStorage.setItem('selected_quandary', JSON.stringify(selected_quandary));

    // Save result to backend
    try {
      const response = await fetch('/api/selected_quandary', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({result}),
      });

      const selected_quandary = await response.json();
      localStorage.setItem('selected_quandary', JSON.stringify(selected_quandary));
      console.log("made it");
      console.log(JSON.stringify(selected_quandary));
    } catch {
      console.log("error");
    }
    const response = await fetch('/api/selected_quandary');
    chosen = await response.json();
    randomSuggestion(response);
}

//get selected quandary from backend
let suggestion;
function randomSuggestion(quandary) {
    console.log("random");
    console.log(quandary);
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

function saveJournal() {
    //will add to database later if needed
}

function saveQuandarySelection() {
    //will add to database later if needed
}