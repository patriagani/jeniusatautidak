//Score dan Jawaban
//Score
var score = 0
//Answer
var answer = 0

//Semua tentang Menu
//Rules Button
var rulesButton = document.getElementById("rulesButton")
//Rules closeButton
var closeButton = document.getElementsByClassName("closeButton")[0]
//Rules modal
var modalRules = document.getElementById("modalRules")
//Play Button
var play = document.getElementById("playButton")
//Menu
var menu = document.getElementById("menu")


//Semua tentang question
//Question Container
var questionContainer = document.getElementById("questionContainer")
var currentQuestion = 0
var totalQuestion = questions.length
//Question element
var question = document.getElementById("question")
//Option
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
//Next button
var nextButton = document.getElementById("nextButton")

//Modal benar salah
var modalQuestion = document.getElementById("modalQuestion")
//Modal question button
var nextButtonModal = document.getElementById("nextButtonModal")
var nextButtonModal2 = document.getElementById("nextButtonModal2")
//Benar Salah
var andaBenar = document.getElementById("andaBenar")
var andaSalah = document.getElementById("andaSalah")


//Result
var jenius = document.getElementById("jenius")
var pintar = document.getElementById("pintar")
var bodoh = document.getElementById("bodoh")
var dungu = document.getElementById("dungu")

//Event rulesButton
rulesButton.addEventListener("click", openModal);
//Event closeButton
closeButton.addEventListener("click", closeModal);
//Event playButton
play.addEventListener("click", playGame);
//Event Option Button
option1.addEventListener("click", clickOption1);
option2.addEventListener("click", clickOption2);
option3.addEventListener("click", clickOption3);
option4.addEventListener("click", clickOption4);

//Event nextButtonModal
nextButtonModal.addEventListener("click", closeModalQuestion);
nextButtonModal2.addEventListener("click", closeModalQuestion);


//Function openModal
function openModal(){
  modalRules.style.display = "block";
}

//Function closeModal
function closeModal(){
  modalRules.style.display = "none";
}

//Function openModalQuestionRight
function openModalQuestionRight(){
  modalQuestion.style.display = "block";
  andaBenar.style.display = "block";
  andaSalah.style.display = "none";

}

//Function openModalQuestionWrong
function openModalQuestionWrong(){
  modalQuestion.style.display = "block";
  andaBenar.style.display = "none";
  andaSalah.style.display = "block";

}

//Function closeModaQuestionl
function closeModalQuestion(){
  modalQuestion.style.display = "none";
}

//Function playGame
function playGame(){
  menu.style.display = "none"
  menu.style.animationName = "menuclose"
  menu.style.animationDuration = "1s"
  questionContainer.style.display = "block"
  loadQuestion()
}

//Function Option Button
function clickOption1(){
  answer = 1
  option1.style.background = "rgb(54, 126, 200)"
  option2.style.background = "transparent"
  option3.style.background = "transparent"
  option4.style.background = "transparent"
}

function clickOption2(){
  answer = 2
  option1.style.background = "transparent"
  option2.style.background = "rgb(54, 126, 200)"
  option3.style.background = "transparent"
  option4.style.background = "transparent"
}

function clickOption3(){
  answer = 3
  option1.style.background = "transparent"
  option2.style.background = "transparent"
  option3.style.background = "rgb(54, 126, 200)"
  option4.style.background = "transparent"
}

function clickOption4(){
  answer = 4
  option1.style.background = "transparent"
  option2.style.background = "transparent"
  option3.style.background = "transparent"
  option4.style.background = "rgb(54, 126, 200)"
}

function resetButton(){
  answer = 0
  option1.style.background = "transparent"
  option2.style.background = "transparent"
  option3.style.background = "transparent"
  option4.style.background = "transparent"
}

//Function loadQuestion
function loadQuestion(){
  var ques = questions[currentQuestion]
  question.textContent = ques.question;
  option1.textContent = ques.option1;
  option2.textContent = ques.option2;
  option3.textContent = ques.option3;
  option4.textContent = ques.option4;
}

//Function result
function result(){
  if (score >= 90) {
    questionContainer.style.display = "none"
    jenius.style.display = "block";
    console.log("jenius");
  }
  else if (score <= 80 && score >= 60) {
    questionContainer.style.display = "none"
    pintar.style.display = "block";
    console.log("pintar");
  }
  else if (score <=50 && score >= 20) {
    questionContainer.style.display = "none"
    bodoh.style.display = "block";
    console.log("bodoh");
  }
  else if (score < 20) {
    questionContainer.style.display = "none"
    dungu.style.display = "block";
    console.log("dungu");
  }
}

//Function loadNextQuestion
function loadNextQuestion(){
  if (currentQuestion === questions.length-1) {
    if (answer === questions[currentQuestion].answer) {
      score+=10
      openModalQuestionRight()
      nextButtonModal.textContent = "Lihat Score Anda"
    }
    else {
      openModalQuestionWrong()
      nextButtonModal2.textContent = "Lihat Score Anda"
    }
    result()
    return
  }
  if (answer === 0) {
    alert("Kamu belum pilih jawaban, silahkan pilih jawaban terlebih dahulu")
    return
  }
  if (answer === questions[currentQuestion].answer) {
    score+=10
    openModalQuestionRight()
  }
  else if (answer !== questions[currentQuestion].answer) {
    openModalQuestionWrong()
  }
  currentQuestion++
  loadQuestion(currentQuestion)
  resetButton()
}
