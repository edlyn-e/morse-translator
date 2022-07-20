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

// export const engToMorse = (engString) => {
//     return engString
//         .toUpperCase()
//         .split("")
//         .map((letter) => {
//             if (morseCode[letter]) {
//                 return morseCode[letter];
//             }
//         })
//         .join(" ");
// };

// /^[\.\-]/.test(engString)) {
//                 return new Error();

export const engToMorse = (engString) => {
    if (engString.startsWith("." || "-" || "|", 0)) {
        return new Error("sorry, your input has to be in Eng-Latin letters");
    } else {
        return engString
            .toUpperCase()
            .split("")
            .map((letter) => {
                if (morseCode[letter]) {
                    return morseCode[letter];
                }
            })
            .join(" ");
    }
};

export const morseToEng = (morseString) => {
    return morseString
        .split(" ")
        .map((character) => {
            if (alphabet[character]) {
                return alphabet[character];
            } else {
                return new Error(
                    "sorry, your input has to be in Morse characters",
                );
            }
        })
        .join("")
        .toLowerCase();
};
