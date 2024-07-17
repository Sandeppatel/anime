document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "Which fruit is red?",
            options: ["apple", "orange", "banana", "grapes"],
            correctAnswer: "apple",
        },
        {
            question: "2 + 4 = ?",
            options: ["2", "6", "8", "1"],
            correctAnswer: "6"
        },
        {
            question: "What color is the sky on a clear day?",
            options: ["blue", "green", "red", "yellow"],
            correctAnswer: "blue"
        },
        {
            question: "What is 5 * 3?",
            options: ["8", "10", "15", "20"],
            correctAnswer: "15"
        },
    ];

   
        const mainDiv = document.querySelector(".main");
        questions.forEach((q, index) => {
            let questionCard = `
                <div class="card">
                    <h4>${index + 1}. ${q.question}</h4>
                    <div class="options">
                        ${q.options.map((option, i) => `
                            <h4 class="option" data-answer="${option === q.correctAnswer ? 'correct' : 'wrong'}">${i + 1}. ${option}</h4>
                        `).join('')}
                    </div>
                    <div id="result-${index}" class="result"></div>
                </div>
            `;
            mainDiv.innerHTML += questionCard;
        });
        const options = document.querySelectorAll(".option");
        options.forEach(option => {
            option.addEventListener("click", () => {
                const isCorrect = option.getAttribute("data-answer") === "correct";
                const resultDisplay = option.parentElement.nextElementSibling;
    
                if (isCorrect) {
                    resultDisplay.textContent = "Correct!";
                    resultDisplay.style.color = "green";
                } else {
                    resultDisplay.textContent = "Wrong!";
                    resultDisplay.style.color = "red";
                }
                // Disable further clicks after an answer is chosen
                option.parentElement.querySelectorAll(".option").forEach(opt => {
                    opt.style.pointerEvents = "none";
                    if (opt.getAttribute("data-answer") === "correct") {
                        opt.style.backgroundColor = "lightgreen";
                    } else {
                        opt.style.backgroundColor = "lightcoral";
                    }
                });
            });
        });
    
       var body = document.querySelector("body");
      body.addEventListener("submit", function(e){
       e.preventDefault();
    })
});