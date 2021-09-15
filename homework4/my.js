"use strict"
alert("Приветствую! Я Калькулятор, который можетсделать простые операции '+, -, *, /, **, OMG' с двумя числами");
const num1 = Number(prompt("Введите любое число:"));
const operation = prompt("Выберите действиe над числами из предложенных '+, -, *, /, **, OMG' ");
const num2 = Number(prompt("Введите еще одно число:"));

if (!isNaN(num1) && !isNaN(num2)) 
{
    if (operation == "+") { alert(num1 + num2); }
    else if (operation == "-") { alert(num1 - num2); }
    else if (operation == "*") { alert(num1 * num2); }
    else if (operation == "/") { alert(num1 / num2); }
    else if (operation == "**") { alert(num1 ** num2); }
    else if (operation == "OMG"|| operation=="omg") 
    {   if (num2 >= 1) 
        {   
            if (num1 < num2 || num1 < 0 ) { alert (Math.floor(num2));}
            else { alert (Math.round( Math.floor(num1) / Math.floor(num2) ) * Math.floor(num2)); }
        } 
        else { alert("Второе число меньше 1"); };
    }
    else { alert("Вы ввели не верное действие"); }
}
else { alert("Вы ввели не верное число"); }