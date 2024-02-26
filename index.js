function login() {
    //retrieve stored data about user
}

function newUser () {
    const username = document.querySelector("#username");
    localStorage.setItem("username", username.value);
    const password = document.querySelector("#password");
    localStorage.setItem("password", password.value);
    //store this somewhere
}