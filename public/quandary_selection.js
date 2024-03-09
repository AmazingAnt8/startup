async function selectedQuandary() {
    let selected_quandary;
    const inputs = document.getElementsByName("varRadio");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            const response = await fetch('/api/selected_quandary');
            selected_quandary = await response.value.json();
            localStorage.setItem('sselected_quandary', JSON.stringify(selected_quandary));
        }
    }
}

function saveJournal() {
    //will add to database later if needed
}

function saveQuandarySelection() {
    //will add to database later if needed
}