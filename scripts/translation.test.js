import { engToMorse, morseToEng } from "./translation";

// Testing for English to Morse
describe("Test cases for translation function from Eng to Morse", () => {
    test("should return translation of Eng-Latin letters", () => {
        expect(engToMorse("hello world")).toBe(
            ".... . .-.. .-.. --- | .-- --- .-. .-.. -..",
        );
    });

    test("should not translate morse to morse", () => {
        expect(() => {
            engToMorse(
                "-... .- -. .- -. .-",
                ".- .--. .--. .-.. . ...",
                "| ... .--. .- -.-. .",
            );
        }).toThrow(
            new Error("sorry, your input has to be in Eng-Latin letters"),
        );
    });
});

// Testing for Morse to English
describe("Test cases for translation function from Eng to Morse", () => {
    test("should return translation of Eng-Latin letters", () => {
        expect(morseToEng(".... . .-.. .-.. --- | .-- --- .-. .-.. -..")).toBe(
            "hello world",
        );
    });

    test("should return translation of Eng-Latin letters", () => {
        expect(morseToEng(".... . .-.. .-.. --- | .-- --- .-. .-.. -..")).toBe(
            "hello world",
        );
    });
});
