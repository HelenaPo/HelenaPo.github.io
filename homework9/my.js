"use strict";
function play(gussed, nomber) {
    gussed = prompt("Я загадал число от 1 до 100, попробуй его угадать:");
    nomber = Math.floor((Math.random()*99)+1);
        while (gussed !== nomber) {
            if (nomber > gussed) {
                gussed = prompt("Мало!");
            } else if (nomber < gussed) {
                gussed = prompt("Много!"); 
            } else {
               gussed = confirm(`Ты угадал, я загадал ${nomber}! 
               Давай сыграем ещё раз?`); 
                    if (!gussed) {
                        break;
                    } else {
                        return play();
                    
                }
            }
        }
}
play();