const axios = require('axios');

function displayFact() {
    const options = {
        method: 'GET',
        url: 'https://numbersapi.p.rapidapi.com/8/math',
        params: {json: 'true'},
        headers: {
          'X-RapidAPI-Key': '8abd71fb1amsh455b57763382a28p1dea2djsn7d25bcae95ba',
          'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
displayFact();