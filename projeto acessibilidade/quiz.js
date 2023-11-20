document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateResult();
});

function calculateResult() {
    const answers = document.getElementById("quiz-form");
    let correctCount = 0;

    const correctAnswers = ["b", "b", "b", "b", "b"];

    for (let i = 1; i <= 5; i++) {
        const selectedOption = answers.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption && selectedOption.value === correctAnswers[i - 1]) {
            correctCount++;
        }
    }

    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    resultText.textContent = `Você acertou ${correctCount} de ${correctAnswers.length} perguntas.`;
    resultContainer.style.display = "block";
}
