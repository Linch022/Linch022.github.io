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

  

createLetter("auto-text", "NICOLAS BERTHOLLET\nDEVELOPPEUR WEB\nFULLSTACK Javascript", 100, 2000);

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
    } else if (scrollValue < 0.51 || scrollValue > 0.77) {
        eventPlayed = false;
        columns.forEach(element => {
            element.style.transition = "";
            element.style.opacity = "0";
            element.style.transform = "translateX(-400px)";
        });
    };
});

// NAVBAR FUNCTION

// window.addEventListener("scroll", () => {
//     const navbar = document.getElementById("navlink-container");
//     const navbarTop = document.getElementById("nav-top");
//     let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//     console.log(scrollValue);
//     if (scrollValue > 0.332) {
//         navbarTop.style.opacity = "1";
//         // navbar.style.position ="fixed";
//         // navbar.style.top = "0";
//         // navbar.classList.add("navbar-scroll")


//     } else if (scrollValue < 0.34) {
//         navbarTop.style.opacity = "0";
//         // navbar.style.position ="fixed";
//         // navbar.style.top = "";
//         // navbarBack.style.position ="absolute";
//         // navbarBack.style.top = "";
//     }
// })

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
});
