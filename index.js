const timerElem = document.querySelector('.setTimer');
const startButtonElem = document.querySelector('#timer-start');
const timerInputElem = document.querySelector('#chosen-time');
const loadingButton = document.querySelector('.loading-logo');
const setTimerElem = document.querySelector('.set-timer');
var timer = new Timer();



timer.addEventListener('secondsUpdated', () => {
    timerElem.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds']);
});

function startTimer() {
    const startTime = getTimerInput();
    timer.start({countdown: true, startValues: {minutes: startTime}});   
    console.log("clicked on start"); 
}

function getTimerInput() {
    const startTime = parseInt(timerInputElem.innerHTML);
    console.log("startTime: ", startTime);
    return startTime;
}


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
