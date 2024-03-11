async function selectedQuandary() {
    const inputs = document.getElementsByName("varRadio");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            result = inputs[i].value;
        }
    }
    // const response = await fetch('/api/selected_quandary');
    // selected_quandary = await response.value.json();
    // localStorage.setItem('selected_quandary', JSON.stringify(selected_quandary));
    try {
      const response = await fetch('/api/selected_quandary', {
        method: 'POST',
      });

      // Store what the service gave us as the high scores
      const selected_quandary = await response.json();
      localStorage.setItem('selected_quandary', JSON.stringify(selected_quandary));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
}

function saveJournal() {
    //will add to database later if needed
}

function saveQuandarySelection() {
    //will add to database later if needed
}