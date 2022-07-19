import { morseCode, alphabet, engToMorse, morseToEng } from "./morse-2.js";

// Accessing the DOM

const clearButton = document.querySelector("#clear");
const inputText = document.querySelector("#input");
const submitButton = document.querySelector(".submit-button");
const variableSwitch = document.querySelector(".checkbox");

function onTranslateClick(callback) {
    if (inputText.value === "") {
        return alert("Oops! Did you want to translate something?");
    }

    const input = inputText.value;
    try {
        const output = callback(input);
        document.getElementById("output").value = output;
    } catch (e) {
        document.getElementById("output").value - e.message;
    }
}

submitButton.addEventListener("click", (e) =>
    variableSwitch
        ? onTranslateClick(engToMorse)
        : onTranslateClick(morseToEng),
);

// clears entries on both screens
clearButton.addEventListener("click", () => {
    document.getElementById("output").value = "";
    inputText.value = "";
});
