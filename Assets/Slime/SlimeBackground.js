document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".chat-window");
    const bgImage = new Image();
    bgImage.src = "/Assets/Slime/Images/Background.png";

    bgImage.onload = function() {
        container.style.width = bgImage.width + "px";
        container.style.height = bgImage.height + "px";
    };
});