function loginFunc () {
    console.log(localStorage.getItem("username"));
    if (document.getElementById("username").value === localStorage.getItem("username") && document.getElementById("password").value === localStorage.getItem("password")) {
        window.location.href = "quandary_selection.html";
    }
    else {
        alert("Must enter valid username and password");
    }
}

function newUser () {
    const username = document.querySelector("#username");
    localStorage.setItem("username", username.value);
    const password = document.querySelector("#password");
    localStorage.setItem("password", password.value);
    window.location.href = "personalize.html";
}

