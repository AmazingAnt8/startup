export var result;

export function selectedQuandary() {
    const inputs = document.getElementsByName("varRadio");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            result = inputs[i].value;
        }
    }
}

function saveJournal() {
    //will add to database later if needed
}

function saveQuandarySelection() {
    //will add to database later if needed
}