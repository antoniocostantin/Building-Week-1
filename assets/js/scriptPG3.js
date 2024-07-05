const pippo = localStorage.getItem("pippo");
const pippa = localStorage.getItem("pippa");
const pippe = localStorage.getItem("pippe");
console.log(pippe);

const ndone = document.getElementById("ndone");
const nwrong = document.getElementById("nwrong");

ndone.innerText = pippo;
nwrong.innerText = pippa;

const percentdone = document.getElementById("percentdone");
const percentwrong = document.getElementById("percentwrong");

percentdone.innerText = `${((pippo / 10)*100).toFixed(1)}%`;
percentwrong.innerText = `${((pippa / 10)*100).toFixed(1)}%`;

const pippi = document.querySelectorAll(".totquestions");

pippi.forEach(pi => {
    pi.innerText = pippe;
});

const congrat = document.getElementById("pippu");
const finalresult = document.querySelector(".final-results-outcome");
const finaldescription = document.querySelector(".final-results-description");

// if(((pippo / 10)*100).toFixed(1) < 60 ){
//     congrat.innerText = "test failed";
//     finalresult.innerText = "u're coglione";
//     finaldescription.innerText = "we'll send u a coglione's certificate asap ";
// }