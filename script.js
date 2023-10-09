document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        const loadingScreen = document.querySelector(".loading-screen");
        loadingScreen.style.display = "none"; 

        const h1Element = document.querySelector("h1");
        h1Element.style.display = "block";
    }, 5000);
});
