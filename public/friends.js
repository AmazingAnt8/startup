/*var i = 0;
setInterval(function celebrate() {
    //future WebSocket
    ++i;
    document.getElementById("celebratedCount").innerHTML = i + " people celebrated!";
}, Math.random() * 5000);*/


function newPost() {

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
      document.querySelector('#friendsCompleted').innerHTML = msg;
    };
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
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