// Define the series of questions
const questions = [
    "Do You Love Me? 💍",
    "Soch le Acche Se? 💖",
    "Ek Bar Aur Soch Le? 🌹",
    "Maan Ja Na Kitna Bhaw Khayegi? 💕"
];

// GIF URLs for each "No" response
const noGIFs = [
    "https://media.tenor.com/KmIZbENMqx4AAAAi/bubu-dudu-sseeyall.gif", // GIF for question 1
    "https://media.tenor.com/vsBS2rmx0UYAAAAi/bubududu-panda.gif",   // GIF for question 2
    "https://media.tenor.com/SBLtyn8kwOcAAAAi/bubu-dudu.gif",     // GIF for question 3
    "https://media.tenor.com/enNRZJBnCQ0AAAAi/cartoons.gif"      // GIF for question 4
];

// Start the proposal process
let currentQuestion = 0;

// Show the first question
document.querySelector("#proposalBox h1").innerText = questions[currentQuestion];

// Handle Yes button click
document.getElementById("yesBtn").onclick = function () {
    // Show a romantic confirmation message and hide buttons
    document.getElementById("proposalBox").innerHTML = "<h1>💍 You said Yes! 💖There’s no one else I’d want to spend forever with. 🌷Together, we are unstoppable, and our love is eternal.</h1>";
    document.getElementById("buttonsContainer").style.display = "none";

    // Show a celebration GIF
    document.getElementById("gifContainer").innerHTML = "<img src='https://media1.tenor.com/m/UXLmgQdkDesAAAAd/robert-bri.gif' alt='Celebration GIF'>";
};

// Handle No button click
document.getElementById("noBtn").onclick = function () {
    if (currentQuestion < questions.length - 1) {
        // Move to the next question if it's not the last one
        currentQuestion++;
        
        // Show next question
        document.querySelector("#proposalBox h1").innerText = questions[currentQuestion];
        
        // Show a new GIF based on the "No" answer
        document.getElementById("gifContainer").innerHTML = `<img src="${noGIFs[currentQuestion]}" alt="No GIF">`;

        // Keep the buttons visible for the next question
        document.getElementById("buttonsContainer").style.display = "flex";
    } else {
        // If it's the last question, keep repeating it until the user says "Yes"
        document.querySelector("#proposalBox h1").innerText = questions[currentQuestion];
        document.getElementById("gifContainer").innerHTML = `<img src="${noGIFs[currentQuestion]}" alt="No GIF">`;

        // Keep the "Yes" and "No" buttons visible for the last question
        document.getElementById("buttonsContainer").style.display = "flex";
    }
};
