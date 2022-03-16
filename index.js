const timerElem = document.querySelector('.setTimer');
//const timerInputElem = document.querySelector('#chosen-time');
timerInputElem = "5"; // placeholder value 

var timer = new Timer();

console.log('timer: ', timer);

setTimer();

function setTimer() {
    timer.start({countdown: true, startValues: getTimerInput()});
    
}


function getTimerInput() {
    const timerValue = parseInt(timerInputElem);
    return `minutes: ${timerValue}`;
}