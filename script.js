const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const pfeil = document.getElementById('icon');
const pfeil1 = document.getElementById('icon1');
const pfeil2 = document.getElementById('icon2');


toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        pfeil.src = "PfeilRechts.svg";
        pfeil1.src = "PfeilRechts.svg";
        pfeil2.src = "PfeilRechts.svg";
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        pfeil.src = "PfeilRechtsW.svg";
        pfeil1.src = "PfeilRechtsW.svg";
        pfeil2.src = "PfeilRechtsW.svg";
    }
});

function myFunction() {
    alert("No CV available :(");
}