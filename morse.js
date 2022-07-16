import { morseCode, alphabet, engToMorse, morseToEng } from "./morse-2.js";

// Accessing the DOM

const clearButton = document.querySelector("#clear");
const inputText = document.querySelector("#input");
const engToMor = document.querySelector("#engToMorse");
const morToEng = document.querySelector("#morseToEng");

engToMor.addEventListener("click", () => {
    if (inputText === "") {
        return alert("Oops! Did you want to translate something?");
    }
    const input = inputText.value;
    const output = engToMorse(input);
    document.getElementById("output").value = output;
});

morToEng.addEventListener("click", () => {
    if (inputText === "") {
        return alert("Oops! Did you want to translate something?");
    }
    const input = inputText.value;
    const output = morseToEng(input);
    document.getElementById("output").value = output;
});

// clears entries on both screens
clearButton.addEventListener("click", () => {
    document.getElementById("output").value = "";
    inputText.value = "";
});
