// ocultar o card de agardecimento
window.onload = ocultThanksCard;
function ocultThanksCard(){
    document.getElementById('thanksCard').style.display = 'none';
}

// adicionar classe selecionado

// selecionar a nota escolhida
    // adicionar EventListener
function selectedRating() {
    var btnRating = document.getElementById("ratingMax");

    btnRating.addEventListener("click", function(){
        if (btnRating.classList.contains('btn-rating-selected') == true) {
            btnRating.removeAttribute('class');
        } else {
            btnRating.setAttribute('class', 'btn-rating-selected');
        }
    });
}

document.addEventListener("DOMContentLoaded", selectedRating, false);

// apresentar card de agradecimento