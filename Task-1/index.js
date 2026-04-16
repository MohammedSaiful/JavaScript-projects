

const actionBtn = document.getElementById('actionBtn');
const resetBtn = document.getElementById('resetBtn');
const text = document.getElementById('myText');
const loaderOverlay = document.getElementById('loaderOverlay');
const progressBar = document.getElementById('progressBar');



function handleAction() {
    loaderOverlay.classList.remove('d-none');

    progressBar.classList.remove('start-loading'); 


    progressBar.classList.add('start-loading'); 

    setTimeout(() => {
        loaderOverlay.classList.add('d-none');

        text.classList.add('active-state');
    }, 3000);
}

function handleReset() {
    text.classList.remove('active-state');
}

// Event Listeners
actionBtn.addEventListener('click', handleAction);
resetBtn.addEventListener('click', handleReset);