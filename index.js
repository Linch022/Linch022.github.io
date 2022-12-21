let navBarScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < navBarScroll) {
        navbar.style.top = 0;
    } else {
        navbar.style.top = "-60px";
    }

    navBarScroll =  window.scrollY;
});