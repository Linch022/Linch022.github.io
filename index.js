// Function for homepage createletter

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

  

createLetter("auto-text", "NICOLAS BERTHOLLET\nDEVELOPPEUR WEB\nJavascript", 100, 2000);

// function for play section 


function repeatEffect(){
    let effectCount = 0;
    let maxEffectCount = 5;
    let intervalId = setInterval(function(){
        const playButtonOne = document.getElementById("play-button1");
        const playButtonTwo = document.getElementById("play-button2");
        if(playButtonOne.style.visibility == "hidden"){
            playButtonOne.style.visibility = "visible";
            playButtonTwo.style.visibility = "visible";
        } else {
            playButtonOne.style.visibility = "hidden";
            playButtonTwo.style.visibility = "hidden";
            effectCount++;
        }
        if(effectCount >= maxEffectCount){
            clearInterval(intervalId);
            playButtonOne.style.visibility = "visible";
            playButtonTwo.style.visibility = "visible";
            effectCount = 0;
            setTimeout(repeatEffect, 3000);
        }
    }, 110);
}
window.addEventListener("load", function() {
    setTimeout(repeatEffect, 4500);
});


// SKILLS FUNCTION


let eventPlayed = false;

window.addEventListener("scroll", () => {
    const columnTwo = document.getElementById("s-container-column2");
    const columnOne = document.getElementById("s-container-column1");
    const columnThree = document.getElementById("s-container-column3");
    let columns = [columnThree, columnTwo, columnOne];
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue)
    if (window.matchMedia("(max-width: 600px)").matches){
        if (scrollValue > 0.64 && scrollValue < 0.80 && eventPlayed === false) {
            let delay = 0;
            columns.forEach(element => {
                setTimeout(() => {
                    element.style.transition = "all 2s ease-out";
                    element.style.opacity = "1";
                    element.style.transform = "none";
                }, delay);
                delay += 1000;
            });
        } else if (scrollValue < 0.52 || scrollValue > 0.88) {
            eventPlayed = false;
            columns.forEach(element => {
                element.style.transition = "";
                element.style.opacity = "0";
                element.style.transform = "translateX(-400px)";
            });
        };
    } else if (window.matchMedia("(max-width: 900px)").matches){
    if (scrollValue > 0.6 && scrollValue < 0.74 && eventPlayed === false) {
        let delay = 0;
        columns.forEach(element => {
            setTimeout(() => {
                element.style.transition = "all 2s ease-out";
                element.style.opacity = "1";
                element.style.transform = "none";
            }, delay);
            delay += 1000;
        });
    } else if (scrollValue < 0.49 || scrollValue > 0.86) {
        eventPlayed = false;
        columns.forEach(element => {
            element.style.transition = "";
            element.style.opacity = "0";
            element.style.transform = "translateX(-400px)";
        });
    };
} else {
    if (scrollValue > 0.58 && scrollValue < 0.71 && eventPlayed === false) {
        let delay = 0;
        columns.forEach(element => {
            setTimeout(() => {
                element.style.transition = "all 2s ease-out";
                element.style.opacity = "1";
                element.style.transform = "none";
            }, delay);
            delay += 1000;
        });
    } else if (scrollValue < 0.52 || scrollValue > 0.79) {
        eventPlayed = false;
        columns.forEach(element => {
            element.style.transition = "";
            element.style.opacity = "0";
            element.style.transform = "translateX(-400px)";
        });
    };
}
});


const navMenu = document.getElementById("nav-button");
const navBar = document.getElementById("navbar");
let navStatut = true;

navMenu.addEventListener("click", () => {
    console.log(navMenu)
    if(navStatut === true) {
        navBar.style.transform = "translateX(0px)";
        navMenu.style.transform = "translateX(0px)";
        navStatut = false;
    } else {
        navBar.style.transform = "translateX(-180px)";
        navMenu.style.transform = "translateX(-120px)";
        navStatut = true;
    }
})