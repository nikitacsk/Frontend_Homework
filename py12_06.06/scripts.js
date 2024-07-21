function Temperature(t){
    return t * 9 / 5 + 32;
}

console.log(Temperature(0));
console.log(Temperature(9));
console.log(Temperature(5));

function RGB(r, g, b) {
    const toHex = (component) => {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
}

console.log(RGB(255, 0, 0));
console.log(RGB(0, 0, 255));
console.log(RGB(15, 15, 15));

function Flats(aptNumber, floors, apartmentsPerFloor) {
    const apartmentsPerEntrance = floors * apartmentsPerFloor;
    const entrance = Math.ceil(aptNumber / apartmentsPerEntrance);
    const apartmentPositionInEntrance = aptNumber % apartmentsPerEntrance;
    const floor = apartmentPositionInEntrance === 0 ? floors : Math.ceil(apartmentPositionInEntrance / apartmentsPerFloor);

    return {
        entrance,
        floor
    };
}

console.log(Flats(81, 9, 4)); 
console.log(Flats(45, 9, 4)); 
console.log(Flats(100, 10, 10)); 

function Credentials(){
    let firstName, lastName, surName;

    firstName = prompt("Введіть  ім'я: ");
    lastName = prompt("Введіть  прізвище: ");
    surName = prompt("Введіть  по-батькові: ");

    firstName = firstName.trim();
    lastName = lastName.trim();
    surName = surName.trim();

    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
    surName = surName.slice(0, 1).toUpperCase() + surName.slice(1).toLowerCase();
    
    let fullName = firstName + ' ' + lastName + ' ' + surName;
    
    return{
        nume: firstName,
        surname: lastName,
        fatherName: surName,
        fullName
    };
}
console.log(Credentials());

function NewLine(str){
    let multiLineString = str.split('\\n').join('\n');
    return multiLineString;
}
console.log(NewLine(prompt("Введіть текст з пробілами: ")));

function PromptOR(str, def){
    let ans = prompt(str);
    if(!ans || ans.trim === ""){
        return def;
    }
    else return ans;
}

console.log(PromptOR("Введіть щось", "бб"));

function loginPassword(login, password){
    let log = prompt("Введіть логін:");

    if (log === login){
        let pas = prompt("Введіть пароль:");
        
        if (pas === password){
            return true;
        } 
        else{
            return false;
        }
    } 
    else{
        return false;
    }
}

console.log(loginPassword("fff", "aaa"));

function ForTable(arr){
    let str = "<table>";
    for (let i = 0; i < arr.length; i++){
        const bgColor = i % 2 === 0 ? "#f2f2f2" : "#ffffff";
        str += `<tr style="background-color: ${bgColor};">`;
        
        for (let j = 0; j < arr[i].length; j++){
            str += `<td>${arr[i][j]}</td>`;
        }
        str += "</tr>";
    }
    str += "</table>";
    return str;
}

document.write(ForTable([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]));

function FilterLexics(str, arr){
    let resArr = str.split(' ');
    resArr = resArr.filter(x => !arr.includes(x));
    return resArr.join(' ');
}

console.log(FilterLexics("oqnfowfno бляха вдлтащйцта щщт on", ['бляха', 'муха', "пляха", "шабля"]));

// script.js

const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
};

function createFormFromObject(obj) {
    const form = document.createElement('form');

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const label = document.createElement('label');
            label.textContent = `${key}: `;

            const input = document.createElement('input');
            input.name = key;
            input.value = obj[key];

            switch (typeof obj[key]) {
                case 'number':
                    input.type = 'number';
                    break;
                case 'boolean':
                    input.type = 'checkbox';
                    input.checked = obj[key];
                    break;
                default:
                    input.type = 'text';
            }

            label.appendChild(input);
            form.appendChild(label);
        }
    }

    return form;
}

window.onload = function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.appendChild(createFormFromObject(car));
};

var persons = [
    { name: "Иван", age: 17 },
    { name: "Мария", age: 35 },
    { name: "Алексей", age: 73 },
    { name: "Яков", age: 12 },
];

function sort(arr, key, ascending = true) {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return ascending ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return ascending ? 1 : -1;
        }
        return 0;
    });
}

console.log(sort(persons, "age")); 
console.log(sort(persons, "name", false)); 

