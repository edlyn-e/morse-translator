import { morseCode, alphabet, engToMorse, morseToEng } from "./morse-2.js";

// Accessing the DOM
const translatorScreen = document.querySelector(".translator__screen");
const resetButton = document.querySelector(".reset");
const clearButton = document.querySelector("#clear");
const inputText = document.querySelector("#input");
const okButton = document.querySelector("#okay");
const toggleSwitch = document.querySelector(".switch");

// translates from Eng to Morse Code
okButton.addEventListener("click", () => {
    if (inputText === "") {
        return alert("Oops! Did you want to translate something?");
    }
    const input = inputText.value;
    const output = engToMorse(input);
    document.getElementById("output").value = output;
});

// clears entries on both screens
clearButton.addEventListener("click", () => {
    document.getElementById("output").value = "";
    inputText.value = "";
});
