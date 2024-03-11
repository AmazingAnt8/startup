let result;
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

    // NOT DOING WHAT'S INTENDED
    // I think this is pulling a saved value from my backend. Instead I'm trying to save my result to the backend so I can access it in other functions.
    // How do I do that?
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


}

function saveJournal() {
    //will add to database later if needed
}

function saveQuandarySelection() {
    //will add to database later if needed
}