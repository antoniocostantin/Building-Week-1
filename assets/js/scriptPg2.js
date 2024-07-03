const RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// for (let index = 0; index < questions.length; index++) {
//   const element = questions[index];
//   console.log(element);
// }
// console.log(questions[3].question.split(" "));
const timer = document.querySelector("#timer");
const divanswer = document.getElementById("answers");

window.addEventListener('load', function(){
    ShowNewQuestion();
});

const countdown = setInterval(function () {
    let seconds = timer.innerText;
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    if (seconds === 0) {
        timer.innerText = 10
        AddTitleQuestion(questions[0].question)
        ShowNewQuestion();
    }
}, 1000
)

const indexAvailable = []
for (let i = 0; i < questions.length; i++) {
    indexAvailable.push(i)
}

function SplitQuestions(domanda) {
    //   let domanda = questions[3].question;
    let splitQuestion = domanda.split(" ");
    //   console.log(splitQuestion);
    let primaMeta = Math.floor(splitQuestion.length / 2);
    let stringa1 = splitQuestion.slice(0, primaMeta);
    let joinStringa1 = stringa1.join(" ");
    //   console.log(joinStringa1);
    let secondaMeta = Math.floor(splitQuestion.length - primaMeta);
    let stringa2 = splitQuestion.slice(secondaMeta - 1);
    let joinStringa2 = stringa2.join(" ");
    //   console.log(joinStringa2);
    return [joinStringa1, joinStringa2];
}
// console.log(splitQuestions("come mi chiamo?"));
function AddTitleQuestion(domanda) {
    const newh4 = document.querySelector("#questions h4");
    const newh2 = document.querySelector("#questions h2");
    let a = SplitQuestions(domanda);
    newh4.innerHTML = a[0];
    newh2.innerHTML = a[1];
}


// console.log(randomQuestion)
function getRandomIndex(arr) {
    let randomNum = RandomNumberGenerator(0, arr.length - 1);
    let randomIndex = arr[randomNum];
    // console.log(randomIndex)
    arr.splice(randomNum, 1);
    // console.log(arr)
    return randomIndex
}
// console.log(questions[getRandomIndex(randomQuestion)]);

function AddAnswer(answerText) {
    const h2answer = document.createElement("h2");
    h2answer.classList.add('answer');
    h2answer.innerText = answerText;
    
    divanswer.appendChild(h2answer);
}


function ShowNewQuestion() {
    const randomIndex = getRandomIndex(indexAvailable);
    const randomQuestion = questions[randomIndex];
    
    AddTitleQuestion(randomQuestion.question);
    
    // // array unificato con tutte le risposte
    // const a = ['risposta1','risposta2','risposta3','risposta4']
    
    // // while(lunghezza a > 0)
    
    // // prendiamo un item random dell'array
    // let b = getRandomIndex(a);
    
    // AddAnwser(b);

    divanswer.innerHTML = "";
    AddAnswer(randomQuestion.correct_answer)

    for(let i = 0; i < randomQuestion.incorrect_answers.length; i++){
        AddAnswer(randomQuestion.incorrect_answers[i])
    }
}