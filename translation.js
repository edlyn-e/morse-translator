export const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "|",
};

export const alphabet = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "|": " ",
};

export const engToMorse = (engString) => {
    return engString
        .toUpperCase()
        .split("")
        .map((letter) => {
            if (morseCode[letter]) {
                return morseCode[letter];
            } else {
                return;
            }
        })
        .join(" ");
};

export const morseToEng = (morseString) => {
    return morseString
        .split(" ")
        .map((character) => {
            if (alphabet[character]) {
                return alphabet[character];
            } else {
                return;
            }
        })
        .join("")
        .toLowerCase();
};
