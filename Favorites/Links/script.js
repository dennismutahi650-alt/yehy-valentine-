const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const mainGif = document.getElementById("main-gif");

// 1. The "No" button runs away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. What happens when they click "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay! See you on the 14th! 😘😘 Love you😘";
    mainGif.src = "";
    noBtn.style.display = "none"; // Hide the No button
});
