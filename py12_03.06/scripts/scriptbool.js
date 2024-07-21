let task = prompt("Назвы завдання:")
if(task === "Number: odd")
{
    let str;
    str = prompt("Введіть число:");
    let num = Number(str);
    if(isNaN(num)){
        alert("Ви ввели число не в вірному форматі");
    }
    else{
        if(num % 2 === 0){
            alert("Число парне");
        }
        else{
            alert("Число не парне");
        }
    }
}
else if(task === "String: lexics")
{
    let str;
    str = prompt("Введіть текст: ");
    if(str.includes("some bad word")){
        alert("Текст має погані слова");
    }
    else{
        alert("Текст не має погані слова");
    }
}
else if(task === "Boolean")
{
    let lunchTime, timeToWork, bedTime;
    lunchTime = confirm("Зараз час для обіду?", "nnfnf", "odnow");
    timeToWork = confirm("Зараз час для роботи?");
    bedTime = confirm("Зараз час для сну?");
    console.log("Зараз час для обіду?", lunchTime ? "Так" : "Ні");
    console.log("Зараз час для роботи?", timeToWork ? "Так" : "Ні");
    console.log("Зараз час для сну?", bedTime ? "Так" : "Ні");

}
else if(task == "Boolean: if")
{
    let isWoman = confirm("Ви жінка?");
    if(isWoman){
        alert("Ви жінка");
    }
    else{
        alert("Ви чоловік");
    }
    
}
else if(task === "")
{

}
else if(task === "Ternary")
{
    let a = confirm("Ви чоловік?") ? "Ви чоловік" : "Ви жінка";
    alert(a);
}
else if(task === "Prompt: or")
{
    let age = prompt("Будь ласка, введіть ваш вік:");
    if (!age || age.trim() === ""){
        alert("Помилка: Ви не ввели вік!");
    } 
    else{
        console.log("Ваш вік:", age);
    }
}
else if(task === "Confirm: or this days")
{
    confirm("шопінг?") || alert("ти - бяка");
}
else if(task === "Confirm: if this days")
{
    if (!confirm("шопінг?")) {
        alert("ти - бяка");
    }
}
else if(task === "Default: or")
{
    let lastName = prompt("Введіть ваше прізвище:") || "Іванов";
    let firstName = prompt("Введіть ваше ім'я:") || "Іван";
    let middleName = prompt("Введіть ваше по-батькові:") || "Іванович";

    console.log(`Прізвище: ${lastName}, Ім'я: ${firstName}, По-батькові: ${middleName}`);
}
else if(task === "Default: if")
{
    let lastName = prompt("Введіть ваше прізвище:");
    if (!lastName){
        lastName = "Іванов";
    }
    let firstName = prompt("Введіть ваше ім'я:");
    if (!firstName){
        firstName = "Іван";
    }
    let middleName = prompt("Введіть ваше по-батькові:");
    if (!middleName){
        middleName = "Іванович";
    }

    console.log(`Прізвище: ${lastName}, Ім'я: ${firstName}, По-батькові: ${middleName}`);
}
else if(task === "Login and password")
{
    let login = prompt("Введіть логін:");

    if (login === "admin"){
        let password = prompt("Введіть пароль:");
        
        if (password === "qwerty"){
            alert("Вітаємо!");
        } 
        else{
            alert("Помилка: Невірний пароль!");
        }
    } 
    else{
        alert("Помилка: Невірний логін!");
    }
}
else if(task === "Currency exchange")
{
    let currency = prompt("Введіть валюту (usd, eur, gbp):").toUpperCase();
    let isBuying = confirm("Ви бажаєте купити валюту? Натисніть 'OK' для купівлі або 'Скасувати' для продажу.");
    let rate = 0;

    if(currency === "USD"){
        rate = isBuying ? 40.7 : 40.1;
    } 
    else if(currency === "EUR"){
        rate = isBuying ? 44.0 : 42.8;
    } 
    else if(currency === "GBP"){
        rate = isBuying ? 52.0 : 51.0;
    } 
    else{
        alert("Невідома валюта!");
    }

    let amount = parseFloat(prompt("Введіть суму на обмін:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Некоректна сума на обмін!");
    } else {
        let result = isBuying ? (amount / rate) : (amount * rate);
        alert(`Результат обміну: ${result.toFixed(2)} ${currency}`);
    }
}
else if(task === "Scissors")
{
    let userChoice = prompt("Введіть ваш вибір (камінь, ножиці, папір):").toLowerCase();
    let computerChoice = ["камінь", "ножиці", "папір"][Math.floor(Math.random() * 3)];
    let result = userChoice === computerChoice ? "Нічия" :
                (userChoice === "камінь" && computerChoice === "ножиці") ||
                (userChoice === "ножиці" && computerChoice === "папір") ||
                (userChoice === "папір" && computerChoice === "камінь") ? "Ви перемогли!" : "Комп'ютер переміг!";

    alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}`);
    alert(result);
}