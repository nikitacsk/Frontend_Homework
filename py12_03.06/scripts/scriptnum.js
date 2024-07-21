{
    var a = 5;  
    var b, c;

    b = a * 5;  
    b = c = b/2; 
}
{
    var age = +prompt("Ваш вік:");
    alert(2024 - age);
}
{
    var temp = +prompt("Температура в градусах Цельсія:");
    alert(temp* 9 / 5 + 32);
}
{
    var num1, num2;
    num1 = +prompt("Введіть перше число");
    num2 = +prompt("Введіть друге число");
    alert(Math.floor(num1/num2))
}
{
    const rate = 44.44;
    var num = +prompt("Введіть кількість гривень:");
    alert("Кількість євро: " + (num*rate).toFixed(2));
}
{
    const red = prompt("Введіть червоний колір у 10-ій системі");
    const green = prompt("Введіть зелений колір у 10-ій системі");
    const blue = prompt("Введіть синій колір у 10-ій системі");

    var color = `#${red.toString(16).padStart(2, '0').toUpperCase()}${green.toString(16).padStart(2, '0').toUpperCase()}${blue.toString(16).padStart(2, '0').toUpperCase()}`;

    alert(color);
}
{
    const floors = +(prompt("Введіть кількість поверхів у будинку:"));
    const flatsPerFloor = +(prompt("Введіть кількість квартир на поверсі:"));
    const flatNumber = +(prompt("Введіть номер квартири:"));

    const flatsPerEntrance = floors * flatsPerFloor;

    const entrance = Math.ceil(flatNumber / flatsPerEntrance);

    const floor = Math.ceil((flatNumber - (entrance - 1) * flatsPerEntrance) / flatsPerFloor);

    alert(`Квартира №${flatNumber} знаходиться на ${floor}-му поверсі ${entrance}-го під'їзду.`);

}