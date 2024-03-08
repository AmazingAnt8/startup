var i = 0;
setInterval(function celebrate() {
    //future WebSocket
    ++i;
    document.getElementById("celebratedCount").innerHTML = i + " people celebrated!";
}, Math.random() * 5000);

function newPost() {

}