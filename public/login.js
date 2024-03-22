(async () => {
    const username = localStorage.getItem('username');
    if (username) {
      document.querySelector('#username').textContent = username;
    //   setDisplay('loginControls', 'none');
    //   setDisplay('playControls', 'block');
    } 
    // else {
    //   setDisplay('loginControls', 'block');
    //   setDisplay('playControls', 'none');
    // }
  })();
  
  async function loginFunc() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function newUser() {
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('username', username);
      window.location.href = 'quandary_selection.html';
    } else {
        alert("Must enter valid username and password");
    }
  }
  
  

  
  async function getUser(username) {
    let scores = [];
    // See if we have a user with the given username.
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
  
  function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }

// function loginFunc () {
//     console.log(localStorage.getItem("username"));
//     if (document.getElementById("username").value === localStorage.getItem("username") && document.getElementById("password").value === localStorage.getItem("password")) {
//         window.location.href = "quandary_selection.html";
//     }
//     else {
//         alert("Must enter valid username and password");
//     }
// }

// function newUser () {
//     const username = document.querySelector("#username");
//     localStorage.setItem("username", username.value);
//     const password = document.querySelector("#password");
//     localStorage.setItem("password", password.value);
//     window.location.href = "personalize.html";
// }

