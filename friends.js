var i = 0;
setInterval(function celebrate() {
    //future WebSocket
    ++i;
    document.getElementById("celebratedCount").innerHTML = i + " people celebrated!";
}, Math.random() * 10000);

function newPost() {

}