function login() {
    //retrieve stored data about user
}

function newUser () {
    const username = document.querySelector("#username");
    localStorage.setItem("username", username.value);
    const password = document.querySelector("#password");
    localStorage.setItem("password", password.value);
    window.location.href = "personalize.html";
}

function login () {
    if (document.querySelector("#username") === localStorage.getItem("username")) /*why isn't this working?*/{
        window.location.href = "quandary_selection.html";
    }
    else {
        alert("Must enter valid username and password");
    }
}