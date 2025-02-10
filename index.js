let questions = [];
let currentIndex = 0;

async function loadQuestions() {
	const response = await fetch("questions.json");
	questions = await response.json();
	pickRandomQuestion();
}

function pickRandomQuestion() {
	if (questions.length > 0) {
		currentIndex = Math.floor(Math.random() * questions.length);
		document.getElementById("questionBox").textContent =
			questions[currentIndex].question;
		document.getElementById("answerBox").textContent =
			"Klikni pro odpověď";
	}
}

function showAnswer() {
	if (questions.length > 0) {
		document.getElementById("answerBox").textContent =
			questions[currentIndex].answer;
	}
}

loadQuestions();