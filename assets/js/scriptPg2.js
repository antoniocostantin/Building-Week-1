const RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// for (let index = 0; index < questions.length; index++) {
//   const element = questions[index];
//   console.log(element);
// }
// console.log(questions[3].question.split(" "));
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

const timer = document.querySelector("#timer");





  const countdown = setInterval(function () {
    let seconds = timer.innerText;
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    // console.log("seconds" ,seconds)
    // console.log("countdown", countdown)
    if (seconds === 0) {
      timer.innerText=10
      AddTitleQuestion(questions[0].question)
    }
  }, 1000
  )

const randomQuestion= []
for (let i = 0; i <questions.length; i++){
  randomQuestion.push(i)

}
// console.log(randomQuestion)
function getRandomIndex(arr){
let randomNum = RandomNumberGenerator(0,arr.length -1);
let randomIndex= arr[randomNum];
console.log(randomIndex)

arr.splice(randomNum, 1);
console.log(arr)
return randomIndex
}