// função para avançar para a próxima etapa
function nextStep(currentStep, nextStep) {
    document.getElementById(currentStep).style.display = "none";
    document.getElementById(nextStep).style.display = "block";
}

function prevStep(currentStep, prevStep) {
    document.getElementById(currentStep).style.display = "none";
    document.getElementById(prevStep).style.display = "block";
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}