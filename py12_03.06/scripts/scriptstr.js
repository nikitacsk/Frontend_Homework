{
    let str;
    prompt("Напиши своє ім'я та прізвище: ")
}
{
    let str;
    str = prompt("Введіть текст з комами: ");
    alert(str.split(",").join("блін, "))
}
{
    let str;
    str = prompt("Введіть текст: ")
    let res = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    alert(res);
}
{
    let str;
    str = prompt("Введіть текст з пробілами: ");
    alert(str.split(' ').length);
}
{
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
    
    alert(fullName);
}
{
    let str;
    str = prompt("Введіть тест з словом пиво: ");
    str = str.split("пиво").join("чай");
    alert(str);
}
{
    let str;
    str = prompt("Введіть тест з html тегом: ");
    let idx1 = str.indexOf('<');
    let idx2 = str.indexOf('>', idx1);
    let res = str.slice(0, idx1);
    res += str.slice(idx2 + 1);
    alert(res);
}
{
    let str = prompt("Введіть рядок, використовуючи \\n як маркер нового рядка:");
    let multiLineString = str.split('\\n').join('\n');
    alert(multiLineString);
}
{
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    let str = prompt("Введіть текст із посиланням на YouTube:");

    let match = str.match(youtubeRegex);
    let videoId = match[1];

    let embedHtml = `
        <iframe  width="420" height="315" 
                src="https://www.youtube.com/embed/${videoId}"
        </iframe>
    `;

    document.write(embedHtml);

}