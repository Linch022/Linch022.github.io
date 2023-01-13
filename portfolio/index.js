function createLetter(elementId, text, delay, duration) {
    let element = document.getElementById(elementId);
    let lines = text.split("\n");
    let currentLine = 0;
    let currentChar = 0;
    function writeChar() {
        if (currentLine >= lines.length) {
            setTimeout(() => {
                element.innerHTML = "";
                currentLine = 0;
                createLetter(elementId, text, delay, duration);
            }, duration);
            return;
        }
        element.innerHTML += lines[currentLine][currentChar];
        currentChar++;
        if (currentChar >= lines[currentLine].length) {
            currentChar = 0;
            currentLine++;
            element.innerHTML += "<br>";
        }
        setTimeout(writeChar, delay);
    }
    writeChar();
}

  

createLetter("auto-text", "NICOLAS BERTHOLLET\nDEVELOPPEUR WEB ET MOBILE\nFULL STACK Javascript", 100, 2000);
