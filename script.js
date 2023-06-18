let score = 0;
let questionNumber = 0;

function generateQuestion() {
    if (questionNumber < STORE.length) {
        return `<div>
    <h2 class="question">${STORE[questionNumber].question}</h2>
      <form>
        <fieldset>
        <label>
          <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
            <span>${STORE[questionNumber].answers[0]}</span>
        </label>
        <label>
          <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
            <span>${STORE[questionNumber].answers[1]}</span>
         </label>
        <label>
          <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
            <span>${STORE[questionNumber].answers[2]}</span>
        </label>
        <label>
          <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
            <span>${STORE[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
          </fieldset>
      </form>
    </div>`;
    } else {
        //Do this
        showResult();
    }
}

//user selects answer on submit run user feedback
//user selects answer on submit run user feedback
function onSubmit() {
    $('form').on('click', '.submitButton', function(event) {
        if (questionNumber < 10) {
            event.preventDefault();
            let selectedValue = $('input:checked').val();
            let rightAnswer = `${STORE[questionNumber].correctAnswer}`;
            if (selectedValue === rightAnswer) {

                rightFeedback();
            } else {
                wrongFeedback();
            }
        } else {
            showResult();
        }
    });
}

function rightFeedback() {
    $('main').html(`<div>
              <h2>You're right</h2>
              <div class="icon"><img src ="${STORE[questionNumber].icon}"alt="food"/></div>
              <p>${STORE[questionNumber].explanation}</p>
              <button type="submit" class="nextButton">Next</button>
          </div>`);
    updateScore();
}

function wrongFeedback() {
    $('main').html(`<div>
              <h2>You're wrong</h2>
              <div class="icon"><img src ="${STORE[questionNumber].icon}" alt="food"/></div>
              <p>${STORE[questionNumber].explanation}</p>
              <button type="submit" class="nextButton">Next</button>
          </div>`);
}

function updateScore() {
    score++;
    $('.score').text(score);
}

function updateQuestionNumber() {
    questionNumber++;
}



function startQuiz() {
    $('.quiz').on('click', '.startButton', function(event) {
        //console.log('start quiz');
        //$('main').html(renderQuestions());
        $('.quiz').remove();
        $('.questionAnswerForm').css('display', 'block');
        // $('.questionAnswerForm').html(renderQuestions());
        $('.QNo').text(1);
        // updateQuestionNumber();
    });
}

// render question in DOM
function renderQuestion() {
    $('.questionAnswerForm').html(generateQuestion());
    $('.questionAnswerForm').remove();
}
/*
function onNext() {
    //console.log("Result");
    $('main').on('click', '.nextButton', function(event) {
        //console.log("Next");
        updateQuestionNumber();
        $('main').html(renderQuestions());
        //if(questionNumber <= 10){
        $('.QNo').text(questionNumber + 1);
        // }
    });
}
*/

/*
function restartQuiz() {
    $('main').on('click', '.restartButton', function(event) {
        location.reload();
    });
}
*/
/*
function showResult() {
    //if(score <= 7){
    $('main').html(`<div>
            <h2>You got ${score}/10</h2>
            <p>With more food experience and knowledge, you'll be able to pass this quiz.</p>
            <button class="restartButton">Restart Quiz</button>
        </div>`);
    //}
    else{
      $('main').html(`<div>
              <h2>You got ${score}/10</h2>
              <p>GOOD JOB! You've passed.</p>
              <button class="restartButton">Restart Quiz</button>
          </div>`);
    }
  //  }
}*/


function runQuiz() {
    startQuiz();
    renderQuestion();
    //onSubmit();
    //showResult();
    // rightFeedback();
    // wrongFeedback();
    // onNext();
    //restartQuiz();
}

$(runQuiz);