const logoNavbar = document.querySelectorAll(".open-navbar");
const navBar = document.querySelector(".navbar");
const navList = document.querySelector(".navlist");

logoNavbar.forEach(function(logo){
        logo.addEventListener("click", function(){
            navBar.classList.toggle("navbar-visible")
            navList.classList.toggle("navlist-visible")
        })
    })