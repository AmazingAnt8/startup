// example starting ideas
let quandaryList = [];

async function pairedQuandariesList() {
    // get the user-inputted quandaries and suggestions
    const newQuandary = document.querySelector("#new_quandary");
    const quandarySave = document.querySelector("#quandary_save");
    const newItem = {quandary: newQuandary.value, suggestions: []};

    // save to backend
    try {
        const response = await fetch('/api/paired_quandaries_list', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newItem),
        });
  
        const list = await response.json();
        localStorage.setItem('paired_quandaries_list', JSON.stringify(list));
        console.log("made it");
        console.log(JSON.stringify(list));
      } catch {
        console.log("error");
      }
    document.getElementById("display_new").innerHTML = newQuandary.value;
}