"use strict";

const select = document.querySelector('#container');

const select = document.getElementById("container");

const elements = document.querySelectorAll("ol .third");

const header = document.querySelector(".header");
header.innerHTML = ("Hello");

const footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");

const fourLi = document.createElement('li');
fourLi.innerHTML = ("four");
const ul = document.querySelector("ul");
ul.append(fourLi);

const greenLi = document.querySelector("ol");
greenLi.style.background = "green";

footer.remove();