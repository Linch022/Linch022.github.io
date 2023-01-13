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

const logoNavbar = document.querySelectorAll(".open-navbar");
const navBar = document.querySelector(".navbar");
const navList = document.querySelector(".navlist");

logoNavbar.forEach(function(logo){
        logo.addEventListener("click", function(){
            navBar.classList.toggle("navbar-visible")
            navList.classList.toggle("navlist-visible")
        })
    })
