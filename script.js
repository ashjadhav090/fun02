const facts = [
    {
        text: "Machine learning models can learn from data without being explicitly programmed.",
        background: "url('https://example.com/ml1.jpg')"
    },
    {
        text: "Deep learning is a subset of machine learning that uses neural networks with three or more layers.",
        background: "url('https://example.com/ml2.jpg')"
    },
    {
        text: "Support Vector Machines (SVM) are supervised learning models used for classification and regression tasks.",
        background: "url('https://example.com/ml3.jpg')"
    }
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    const factContainer = document.getElementById('fact-container');
    factContainer.style.backgroundImage = fact.background;
    document.getElementById('fact').textContent = fact.text;
}
