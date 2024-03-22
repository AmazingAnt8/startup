var i = 0;
setInterval(function celebrate() {
    //future WebSocket
    ++i;
    document.getElementById("celebratedCount").innerHTML = i + " people celebrated!";
}, Math.random() * 5000);


function newPost() {

}

function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = 'index.html'));
  }