function downloadFunction() {
  const element = document.getElementById("body");
  const options = {
    filename: "certificato.pdf",
    image: { type: "jpeg", quality: 1.0 },
    // html2canvas: { scale: 4 },
    jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
  };
  html2pdf().from(element).set(options).save();
}


function back(){
  window.location.replace("pagina3.html");

}