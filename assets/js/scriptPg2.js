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

const timer= document.querySelector("#timer");
let seconds=timer.innerText;
console.log(seconds)



setInterval (function(){
  seconds=seconds-1;
timer.innerHTML= seconds;
console.log(seconds)
},1000

)
