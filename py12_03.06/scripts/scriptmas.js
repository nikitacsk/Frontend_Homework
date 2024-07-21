{
    const arr = [confirm("Один"), confirm("Два"), confirm("Три")];
    alert(arr);
}
{
    const arr = [];
    arr[0] = prompt("Скажи, щось");
    arr[1] = prompt("Скажи, щось");
    arr[2] = prompt("Скажи, щось");
    alert(arr);
}
{
    const arr = [0, 1, 2, 3, 4, 5];
    let idx = prompt("Який елемент масиву вивести(до 6):");
    alert(arr[idx]);
    alert(arr[arr.length]);
}
{
    const arr = [0, 1, 2, 3, 4, 5];
    let idx = prompt("Який елемент масиву змінити:");
    let val = prompt("Яке значення присвоїти:")
    arr[idx] = val;
    alert(arr);
}
{
    const arr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            arr[i][j] = i * j;
        }
    }  
    alert(arr); 
}
{
    const arr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            arr[i][j] = i * j;
        }
    }
    const newArr = arr.slice(1)
    for(let i = 0; i < 5; i++){
        newArr[i] = newArr[i].slice(1);
    }   
    alert(newArr);
}
{
    let str = prompt("Введіть рядок з кількох слів");
    const arr = str.split(' ');
    str = prompt("Введіть слово, яке треба знайти");
    if(arr.includes(str)){
        alert(arr.indexOf(str) + 1);
    }
    else{
        alert("Цього символу не існує");
    }
}
{
    const arr = [];
    arr.push(prompt("Введіть що треба вставити"));
    arr.push(prompt("Введіть що треба вставити"));
    arr.push(prompt("Введіть що треба вставити"));
    arr.push(prompt("Введіть що треба вставити"));
    arr.push(prompt("Введіть що треба вставити"));
    const newArr = [];
    newArr.push(arr.pop());
    newArr.push(arr.pop());
    newArr.push(arr.pop());
    newArr.push(arr.pop());
    newArr.push(arr.pop());
    alert(newArr);
    const superNewArr = [];
    superNewArr.unshift(newArr.shift());
    superNewArr.unshift(newArr.shift());
    superNewArr.unshift(newArr.shift());
    superNewArr.unshift(newArr.shift());
    superNewArr.unshift(newArr.shift());
    alert(superNewArr);

}
{
    const arr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            arr[i][j] = i * j;
        }
    }
    const newArr = [[], [], [], [], [], []];
    newArr[0] = arr[0];
    newArr[1] = arr[1];
    newArr[2] = arr[2];
    newArr[3] = arr[3];
    newArr[4] = arr[4];
    newArr[5] = arr[5];
    alert(newArr);
}
{
    const arr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            arr[i][j] = i * j;
        }
    }
    const newArr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            newArr[i][j] = arr[i][j];
        }
    }
    alert(newArr);
}
{
    const arr = [1, 2, 3, 4, 5, []];
    const arr2 = arr;
    if(arr === arr2){
        alert("YES");
    }
}
{
    const arr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            arr[i][j] = i * j;
        }
    }
    const newArr = arr.slice(1)
    for(let i = 0; i < 5; i++){
        newArr[i] = newArr[i].slice(1);
    }  
    const superNewArr = [...newArr[0], ...newArr[1], ...newArr[2], ...newArr[3], ...newArr[4]];
    alert(superNewArr);
}
{
    let userInput = prompt("Введіть рядок:");
    let [first, , , , fifth, , , , ninth] = userInput;
    console.log("Перша літера:", first);
    console.log("П'ята літера:", fifth);
    console.log("Дев'ята літера:", ninth);
}
{
    let userInput = prompt("Введіть рядок:");
    let [, second='!', , fourth='!', fifth ='!', , , ,] = userInput;
    console.log("Друга літера:", second);
    console.log("Четверта літера:", fourth);
    console.log("П'ята літера:", fifth);
}
{
    const arr = [[], [], [], [], [], []];
    for(let i = 0; i < 6; i++){
        for( let j = 0; j < 6; j++){
            arr[i][j] = i * j;
        }
    }
    let [a, ...newArr] = arr;
    [a, ...newArr[0]] = newArr[0];
    [a, ...newArr[1]] = newArr[1];
    [a, ...newArr[2]] = newArr[2];
    [a, ...newArr[3]] = newArr[3];
    [a, ...newArr[4]] = newArr[4];
    alert(newArr);
}
{
    const arr = ["John", "Paul", "George", "Ringo"];
    for(const el of arr){
        alert(el);
    }
}
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    for (const currency of currencies){
        str += `<option value="${currency}">${currency}</option>`;
    }
    str += "</select>";
    document.write(str);  
}
{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table><tr>";
    for (const name of names){
        str += `<td>${name}</td>`;
    }
    str += "</tr></table>";
    document.write(str); 
}
{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table>";
    for (const name of names) {
        str += `<tr><td>${name}</td></tr>`;
    }
    str += "</table>";
    document.write(str); 
}
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<table>";
    for (const currency of currencies){
        str += "<tr>"; 
        for (const letter of currency){ 
            str += `<td>${letter}</td>`; 
        }
        str += "</tr>"; 
    }
    str += "</table>";
    document.write(str); 
}
{
    let str = "<table>";
    for (let i = 1; i <= 5; i++){
        const bgColor = i % 2 === 0 ? "#f2f2f2" : "#ffffff";
        str += `<tr style="background-color: ${bgColor};">`;
        
        for (let j = 1; j <= 5; j++){
            str += `<td>${i * j}</td>`;
        }
        str += "</tr>";
    }
    str += "</table>";
    document.write(str);
}
{
    const capitalize = str => {
        let res = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        return res 
   }
   console.log(capitalize("cANBerRa")) 
}
{
    let str = prompt("Введіть текст з кілька слів:");
    const arr = str.split(' ');
    const res = arr.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase());
    str = res.join(' ');
    alert(str);
}
{
    let str = prompt("Введіть текст з кілька слів:");
    const arr = str.split(' ');
    const word = ["неприпустимі", "слова"];
    let resArr = arr.filter(x => !word.includes(x));
    alert(resArr.join(' '));
}
{
    let str = prompt("Введіть текст з кілька слів:");
    const arr = str.split(' ');
    const word = ["неприпустимі", "слова"];
    let res = arr.map(x => word.includes(x) ? 'BEEP' : x);
    alert(res.join(' '));
}
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    str += currencies.reduce((accumulator, currency) => {
    return accumulator + `<option value="${currency}">${currency}</option>`;
    }, "");
    str += "</select>";
    document.write(str); 
}
{
    const line = prompt("Введіть рядок з дужками:");
    const bracketsStack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    let errorPosition = -1;

    for (let i = 0; i < line.length; i++){
        const character = line[i];
        if (openBrackets.includes(character)){
            bracketsStack.push({char: character, pos: i});
        } 
        else if(closeBrackets.includes(character)){
            if (bracketsStack.length === 0) {
                errorPosition = i;
                break;
            }
            const lastBracket = bracketsStack.pop();
            if (openBrackets.indexOf(lastBracket.char) !== closeBrackets.indexOf(character)) {
                errorPosition = i;
                break;
            }
        }
    }

    if (errorPosition !== -1){
        console.log(`Помилка у позиції ${errorPosition}`);
    } 
    else if(bracketsStack.length > 0){
        console.log(`Помилка у позиції ${bracketsStack[bracketsStack.length - 1].pos}`);
    } 
    else{
        console.log("У рядку немає помилок!");
    }
}