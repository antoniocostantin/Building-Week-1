function downloadFunction() {
  const element = document.getElementById("body");
  const options = {
    margin: 10,
    filename: "certificato.pdf",
    image: { type: "jpeg", quality: 1.0 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().from(element).set(options).save();
}
