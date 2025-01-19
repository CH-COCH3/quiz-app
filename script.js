const questions = [
    { text: "地球は丸いですか？", correct: true },
    { text: "太陽は夜に見えますか？", correct: false },
    { text: "1+1は3ですか？", correct: false },
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].text;
  }
  
  function answer(isCorrect) {
    const resultElement = document.getElementById("result");
    if (isCorrect === questions[currentQuestionIndex].correct) {
      resultElement.textContent = "正解！";
    } else {
      resultElement.textContent = "不正解...";
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      resultElement.textContent += " クイズ終了！お疲れ様でした！";
    }
  }
  
  // 初期化
  displayQuestion();
  