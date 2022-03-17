const timerElem = document.querySelector('.setTimer');
const startButtonElem = document.querySelector('#timer-start');
const timerInputElem = document.querySelector('#chosen-time');
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
