import { engToMorse, morseToEng } from "./translation.js";

// Accessing the DOM

const clearButton = document.querySelector("#clear");
const inputText = document.querySelector("#input");
const engToMor = document.querySelector("#engToMorse");
const morToEng = document.querySelector("#morseToEng");

function onTranslateClick(callback) {
    if (inputText.value === "") {
        return alert("Oops! Did you want to translate something?");
    }

    const input = inputText.value;

    try {
        const output = callback(input);
        document.getElementById("output").value = output;
    } catch (e) {
        document.getElementById("output").value = e.message;
    }
}
engToMor.addEventListener("click", (e) => onTranslateClick(engToMorse));

morToEng.addEventListener("click", (e) => onTranslateClick(morseToEng));

// clears entries on both screens
clearButton.addEventListener("click", () => {
    document.getElementById("output").value = "";
    inputText.value = "";
});
