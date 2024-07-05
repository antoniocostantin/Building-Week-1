const timer = document.querySelector("#timer");
const divanswer = document.getElementById("answers");
const indexAvailable = []
const duration = 5; // Durata del timer in secondi
let seconds = duration;
let num = 1;
let correctansw = 0;
let incorrectansw = 0;
let correctanswer;

//MODIFICHE DI MARCO
const answers = document.querySelectorAll('.answer');

const RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

window.addEventListener('load', function () {
    init();
});

const countdown = setInterval(function () {
    seconds--;
    if (seconds === 0) {
        num++;
        Getanswerselected();
        Changepage();

        ShowNewQuestion();
        Checkquestion(num);
        seconds = duration;
        startTime = Date.now();
    }
}, 1000
)

function SplitQuestions(domanda) {
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
    h2answer.addEventListener('click', function () {
        const colorclasslist = document.querySelectorAll(".color");
        colorclasslist.forEach(element => {
            element.classList.remove("color");
        });
        this.classList.add("color");
    })
    divanswer.appendChild(h2answer);
}

function ShowNewQuestion() {
    const randomIndex = getRandomIndex(indexAvailable);
    const randomQuestion = questions[randomIndex];
    correctanswer = randomQuestion.correct_answer;
    AddTitleQuestion(randomQuestion.question);

    divanswer.innerHTML = "";
    const arrayrisposte = [];
    // console.log(randomQuestion)
    for (let i = 0; i < randomQuestion.incorrect_answers.length; i++) {
        arrayrisposte.push(randomQuestion.incorrect_answers[i]);
    }
    arrayrisposte.push(randomQuestion.correct_answer);

    const lengthanswer = arrayrisposte.length;
    for (let i = 0; i < lengthanswer; i++) {
        const answer = getRandomIndex(arrayrisposte);
        AddAnswer(answer);
    }
}

function Checkquestion(n) {
    const numquestion = document.getElementById("numeroVariabile");
    numquestion.innerText = n;
}

function init() {
    // puliamo il local storage
    localStorage.clear();
    // init numero massimo di domande
    const questionlenght = document.getElementById("numeroFisso");
    questionlenght.innerText = `/${questions.length}`;

    // init array degli indici disponibili
    for (let i = 0; i < questions.length; i++) {
        indexAvailable.push(i)
    }

    Checkquestion(num);
    ShowNewQuestion();
}

function Changepage() {
    localStorage.setItem("pippe", questions.length)
    localStorage.setItem("pippo", correctansw);
    localStorage.setItem("pippa", incorrectansw);
    if (indexAvailable.length === 0) {
        document.location.href = "Pagina3.html";
    }
}

function Getanswerselected() {
    let answer;
    const selanswer = document.querySelector(".color");
    if (selanswer != null) {
        answer = selanswer.innerText;
    }
    Checkresult(answer)
}

function Checkresult(el) {
    if (el === correctanswer) {
        correctansw++;
    } else {
        incorrectansw++;
    }
    console.log('incorrectansw', incorrectansw, 'correctansw', correctansw)
}

//MODIFICHE DI MARCO



answers.forEach(answer => {
    answer.addEventListener('click', function () {
        answer.forEach(ans => {
            ans.classList.remove('selected');
            ans.classList.remove('deselected');
            const selectedAnswer = this.innerText;
            Checkresult(selectedAnswer);

        }

        )
    }
    )
}

)
