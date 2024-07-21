function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchFromAPI(url) {
    return fetch(url).then(res => res.json());
}

function raceAPIAndDelay(apiUrl, delayMs) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; 

    Promise.race([fetchFromAPI(apiUrl), delay(delayMs)])
        .then(result => {
            if (result === undefined){
                resultContainer.textContent = 'Delay was faster!';
            } 
            else{
                resultContainer.textContent = 'Fetch was faster!';
            }
        })
        .catch(error => {
            resultContainer.textContent = 'Error: ' + error;
        });
}

const apiUrl = 'https://swapi.dev/api/people/1/';
const delayMs = Math.floor(Math.random() * 2000) + 1000; 

raceAPIAndDelay(apiUrl, delayMs);
