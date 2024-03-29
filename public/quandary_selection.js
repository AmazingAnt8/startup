let result;
let chosen;

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

    // Retrieve from backend (not really necessary here but to make sure I can)
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

function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = 'index.html'));
  }

  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    console.log('configureWebSocket()');
    socket.onopen = (event) => {
        let text = document.querySelector('#friendsCompleted');
        text.innerHTML = 'connected';
    };
    socket.onclose = (event) => {
        let text = document.querySelector('#friendsCompleted');
        text.innerHTML = 'disconnected';
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      console.log("here");
      console.log(msg);
      document.querySelector('#friendsCompleted').innerHTML = msg;
    };
}

function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event));
}

configureWebSocket();

async function sendCompletion() {
    console.log("sendCompletion()");
    const msg = " completed a self-care suggestion!";
    const username = localStorage.getItem('username');
    if (!!msg) {
        socket.send(`{"name":"${username}", "msg":"${msg}"}`);
    }
}