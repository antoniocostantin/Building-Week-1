const feedbackInput = document.querySelector('#feedback');
const ratingsForm = document.getElementById('ratingsForm')

window.addEventListener('load', function () {

    ratingsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedStar = document.querySelector('input[name="rating"]:checked');
        alert(`
            Valutazione: ${selectedStar.value} stelle ${selectedStar.value == 5 ? 'san montana' : ''} \n 
            Commento: ${feedbackInput.value}    
        `);
        
        window.location.replace("index.html");
    });
});