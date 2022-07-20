// Testing for English to Morse
describe("Test cases for translation function from Eng to Morse", () => {
    const notEnglish = new Error("The string needs to have Eng-Latin letters");

    test("should return translation of Eng-Latin letters", () => {
        expect(engToMorse("hello world")).toBe(
            ".... . .-.. .-.. --- | .-- --- .-. .-.. -..",
        );
    });
});

// Testing for Morse to English
describe("Test cases for translation function from Eng to Morse", () => {
    const notMorse = new Error("The string needs to have morse characters");
});
