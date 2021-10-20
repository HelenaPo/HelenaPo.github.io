"use strict"

function capitalize(string) {
    const str = string.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return str.join(" ");
}

function checkSubstring(string, substring) {
    return string.toLowerCase().includes(substring.toLowerCase());
}