const questions = [
    {
      question: "Javascript is an which language?",
      choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
      answer: "Object-Oriented"
    },
    {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "Both", "None of the above"],
      answer: "Both"
    },
    {
      question: "Which of the following is not a Javascript framework?",
      choices: ["Node", "Vue", "React", "Cassandra"],
      answer: "Cassandra"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit-btn");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesElement.innerHTML = "";
    question.choices.forEach(choice => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = choice;
      li.appendChild(input);
      li.appendChild(document.createTextNode(choice));
      choicesElement.appendChild(li);
    });
  }
  
  function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
      const answer = selectedChoice.value;
      if (answer === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      selectedChoice.checked = false;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
  }
  
  function showScore() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    submitButton.style.display = "none";
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
    scoreElement.style.display = "block";
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  showQuestion();
  