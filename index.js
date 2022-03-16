// Timer
// const countdownElem = document.querySelector('#countdown');
// const timer = new easytimer.Timer({ countdown: true, startValues: { seconds: 5 } });
// countdownElem.innerHTML = timer.getTimeValues().toString();
// timer.start();

// timer.addEventListener('secondsUpdated', function (e) {
//     countdownElem.innerHTML = timer.getTimeValues().toString();
//   });
  
// timer.addEventListener('targetAchieved', function (e) {
//     countdownElem.innerHTML = timer.getTimeValues().toString();
// });



const loadingButton = document.querySelector('.loading-logo');
const setTimerElem = document.querySelector('.set-timer');
loadingButton.addEventListener('click', () => {
    const loadingElem = document.querySelector('.loading');
    loadingElem.classList.add('hidden');
    navBtn.classList.remove('hidden');
    setTimerElem.classList.toggle('hidden');
    setTimer(chosenTime);
});


const navBtn = document.querySelector('.menu-btn'); 
const navElem = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('menu-btn--active');
    navElem.classList.toggle('nav--active');
});

const reduceTimeBtn = document.querySelector('#reduce-time');
reduceTimeBtn.addEventListener('click', () => {
    chosenTime--; 
    setTimer(chosenTime);
})

const increaseTimeBtn = document.querySelector('#increase-time');
increaseTimeBtn.addEventListener('click', () => {
    chosenTime++; 
    setTimer(chosenTime);
})

let chosenTimeElem = document.querySelector('#chosen-time');
let chosenTime = 10;

function setTimer(chosenTime) {

    chosenTimeElem.innerHTML = chosenTime;
}




const timerButton = document.querySelector('#timer-start');
timerButton.addEventListener('click', () => {
    /*
    timern in här, ta ifrån beroende på värde i chosenTime variablen
    beroende på checkade checkboxes hämta funktioner de hör till
    */
    setTimerElem.classList.toggle('hidden');
});