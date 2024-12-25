const facts = [
    {
        text: "Generative AI can create new content, from images to music, based on patterns it learns from existing data.",
        background: "url('https://example.com/genai1.jpg')"
    },
    {
        text: "AI like GPT-3 can generate human-like text based on the input it receives.",
        background: "url('https://example.com/genai2.jpg')"
    },
    {
        text: "Generative adversarial networks (GANs) are a type of AI used to generate new data instances that resemble your training data.",
        background: "url('https://example.com/genai3.jpg')"
    }
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    const factContainer = document.getElementById('fact-container');
    factContainer.style.backgroundImage = fact.background;
    document.getElementById('fact').textContent = fact.text;
}
