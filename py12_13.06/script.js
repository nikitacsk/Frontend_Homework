function displayJsonAsTable(container, json) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    for(const key in json){
        if(json.hasOwnProperty(key)){
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
    }
    thead.appendChild(headerRow);

    const dataRow = document.createElement('tr');
    for(const key in json){
        if(json.hasOwnProperty(key)){
            const td = document.createElement('td');
            const value = json[key];
            
            if (typeof value === 'string' && value.includes('https://swapi.dev/api/')){
                const button = document.createElement('button');
                button.textContent = `Load ${key}`;
                button.onclick = () => {
                    fetchDataAndDisplay(container, value);
                };
                td.appendChild(button);
            } 
            else if (Array.isArray(value) && value.some(item => typeof item === 'string' && item.includes('https://swapi.dev/api/'))){
                value.forEach(url => {
                    if (url.includes('https://swapi.dev/api/')) {
                        const button = document.createElement('button');
                        button.textContent = `Load ${key}`;
                        button.onclick = () => {
                            fetchDataAndDisplay(container, url);
                        };
                        td.appendChild(button);
                        td.appendChild(document.createElement('br'));
                    }
                });
            } 
            else{
                td.textContent = value;
            }
            
            dataRow.appendChild(td);
        }
    }
    tbody.appendChild(dataRow);

    table.appendChild(thead);
    table.appendChild(tbody);
    container.innerHTML = ''; 
    container.appendChild(table);
}

function fetchDataAndDisplay(container, url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayJsonAsTable(container, data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchDataAndDisplay(document.getElementById('dataContainer'), 'https://swapi.dev/api/people/1/');
