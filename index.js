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


//  function for navbar
// const logoNavbar = document.querySelectorAll(".open-navbar");
// const navBar = document.querySelector(".navbar");
// const navList = document.querySelector(".navlist");

// logoNavbar.forEach(function(logo){
//         logo.addEventListener("click", function(){
//             navBar.classList.toggle("navbar-visible")
//             navList.classList.toggle("navlist-visible")
//         })
//     })


    // function for progressbar 

    // let myLevel = document.querySelectorAll(".mylevel");


// function progress(idLevel, levelMax) {
//     let i = 0;
//     if (i === 0) {
//         i = 1;
//         const bar = document.getElementById(idLevel);
//         let width = 1;
//         let id = setInterval(frame, 30);
//         function frame() {
//             if (width >= levelMax) {
//                 clearInterval(id)
//                 i = 0;
//             } else {
//                 width++;
//                 bar.style.width = width + "%";
//                 bar.innerHTML = width + "%";
//             }
//         }
//     }
// }

// function getId(selector) {
//     let elements = document.querySelectorAll(selector);
//     let ids = [];
//     elements.forEach(function(element) {
//         ids.push(element.id);
//     });
//     return ids;
// }

// 

// window.addEventListener("scroll", () => {

//     let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//     console.log(scrollValue);
//     if (scrollValue > 0.60 && eventPlayed === false) {
//         let ids = getId(".mylevel");
//         let levelsValues = ["80", "80", "20", "0", "10", "75"];
//         for (let i = 0; i < ids.length; i++) {
//         progress(ids[i], levelsValues[i]);
//         } eventPlayed = true;
//     } else if (scrollValue < 0.54) {
//         eventPlayed = false;
//         for (let i = 0 ; i < myLevel.length; i++) {
//             myLevel[i].style.width = "0%";
//             myLevel[i].innerHTML = "";
//         }
//     }

// })

let eventPlayed = false;

window.addEventListener("scroll", () => {
    const columnTwo = document.getElementById("s-container-column2");
    const columnOne = document.getElementById("s-container-column1");
    const columnThree = document.getElementById("s-container-column3");
    let columns = [columnThree, columnTwo, columnOne];
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
    if (scrollValue > 0.55 && scrollValue < 0.75 && eventPlayed === false) {
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
        })
    }
})

// NAVBAR FUNCTION

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navlink-container");
    const navbarTop = document.getElementById("nav-top");
    const navbarBack = document.getElementById("nav-background");
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.338) {
        navbarTop.style.opacity = "1";
        navbar.style.position ="fixed";
        navbar.style.top = "0";
        navbarBack.style.position = "fixed";
        navbarBack.style.top = "5.2%";


    } else if (scrollValue < 0.35) {
        navbarTop.style.opacity = "0";
        navbar.style.position ="absolute";
        navbar.style.top = "";
        navbarBack.style.position ="absolute";
        navbarBack.style.top = "";
    }
})