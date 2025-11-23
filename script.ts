const quotes = [
    "The best way to predict the future is to create it.",
    "Dream big and dare to fail.",
    "Success is not final, failure is not fatal.",
    "Believe you can and you're halfway there.",
    "Happiness is not something ready made. It comes from your actions.",
    "Do what you can, with what you have, where you are."
];

const generateBtn = document.getElementById('generateBtn');
const quoteDisplay = document.getElementById('quoteDisplay');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});
