var currentQuest = 0;
var score = 0;

var quizQuestion = [{
		question: "What does the typical framing hammer weigh?",
		choices: ["12oz.", "16oz.", "22oz."],
		answer: 2
	}, {

		question: "How is concrete measured?",
		choices: ["lbs", "cubic foot", "square foot"],
		answer: 1
	}, {
		question: "How many square feet in a sheet of plywood?",
		choices: ["16", "24", "32"],
		answer: 2
	}, {
		question: "How tall is an 8' wall?",
		choices: ["8 feet", "8 feet 2 inches", "8 feet 6 inches"],
		answer: 0
	}, {
		question: "Standard wall framing places studs on center what distance?",
		choices: ["12 inches", "16 inches", "18 inches"],
		answer: 1
	}

];

function showQuestion(num) {
	console.log(num);

	if (num < quizQuestion.length) {
		$('.displayquestion').text(quizQuestion[num].question);
		showChoices(num);
	} else {
		$('.displayquestion').text("That's all folks !");
		$('.displaychoices').hide();
	}
	// console.log(showQuestion());
}

function showChoices(num) {
	var getChoices = quizQuestion[num].choices;
	var choiceList = '';
	for (var i = 0; i < getChoices.length; i++) {
		choiceList += '<li><input type = "radio" name = "choices" value = " ' + i + ' " /><label>' + getChoices[i] + "</label></li>";
	}
	$('.displaychoices').html(choiceList);
}

function checkAnswer(guess) {
	var question = quizQuestion[currentQuest];
	if (guess == question.answer) {
		score++;
	}
	$('.current-score').text("Your score is --> " + score);
}

$(document).ready(function () {

	$(".start-quiz").click(function (event) {
		showQuestion(currentQuest);
		console.log("you clicked the start button");
	});

	$(".submit-button").click(function (event) {
		var userAnswer = $('input[type="radio"]:checked').attr('value');
		console.log(userAnswer);
		checkAnswer(userAnswer);
		currentQuest++;
		showQuestion(currentQuest);
	});

});

			// thanks to my mentor Allissa for guiding me through this challenge and having the patience to explain stuff