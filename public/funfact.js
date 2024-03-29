async function displayFact () {
    let randNum = String(Math.floor(Math.random() * 5000));
    console.log(randNum);
    const url = 'https://numbersapi.p.rapidapi.com/' + randNum + '/math?json=true';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8abd71fb1amsh455b57763382a28p1dea2djsn7d25bcae95ba',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        let result = await response.text();
        result = JSON.parse(result);
        console.log(result);
        console.log(result.text);
        localStorage.setItem('fun_fact', result.text);
    } catch (error) {
        console.error(error);
    }
       
}
displayFact();
document.getElementById("fact").innerHTML = localStorage.getItem('fun_fact');


function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = 'index.html'));
}

// function displayFact(data) {
//     fetch('https://numbersapi.p.rapidapi.com/8/math')
//         .then((response) => response.json())
//         .then((data) => {
//             localStorage.setItem("fun_fact", data.url);
//         })
//     document.getElementById("fact").innerHTML = localStorage.getItem("fun_fact");
// }
// displayFact();


// function displayQuote(data) {
//     fetch('https://api.quotable.io/random')
//       .then((response) => response.json())
//       .then((data) => {
//         const containerEl = document.querySelector('#quote');
  
//         const quoteEl = document.createElement('p');
//         quoteEl.classList.add('quote');
//         const authorEl = document.createElement('p');
//         authorEl.classList.add('author');
  
//         quoteEl.textContent = data.content;
//         authorEl.textContent = data.author;
  
//         containerEl.appendChild(quoteEl);
//         containerEl.appendChild(authorEl);
//       });
// }
// displayQuote();