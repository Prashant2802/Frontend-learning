let clicks = 0;
let mouseMoves = 0;
let lastScrollTop = 0;
let scrollSpeed = 0;
let idleTime = 0;
let lastActivity = Date.now();

document.addEventListener("click", () => {
    clicks++;
    document.getElementById("clicks").innerText = clicks;
    lastActivity = Date.now();
});

document.addEventListener("mousemove", () => {
    mouseMoves++;
    document.getElementById("mouse").innerText = mouseMoves;
    lastActivity = Date.now();
});

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    scrollSpeed = Math.abs(currentScroll - lastScrollTop);
    lastScrollTop = currentScroll;

    document.getElementById("scroll").innerText = scrollSpeed;
    lastActivity = Date.now();
});

setInterval(() => {
    idleTime = Math.floor((Date.now() - lastActivity) / 1000);
    document.getElementById("idle").innerText = idleTime;
}, 1000);

setInterval(() => {
    let state = "Analyzing...";

    if (idleTime > 10) {
        state = "Idle / Bored 😴";
    } else if (clicks > 10 && scrollSpeed > 20) {
        state = "Highly Engaged 🔥";
    } else if (mouseMoves > 50) {
        state = "Focused 👀";
    } else {
        state = "Distracted ⚠️";
    }

    document.getElementById("state").innerText = state;
}, 3000);
