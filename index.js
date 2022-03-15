// Basic Användning

 // Starting a timer is very simple. You only have to get a new instance of Timer and invoke the start method. 
 // The timer will update the values every second and it will dispatch a secondsUpdated event that you can listen using the addEventListener method. 
 // You can get the time values using getTimeValues method.


var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});

// Getting time values

var timer = new Timer();
timer.start({precision: 'seconds'});
timer.addEventListener('secondsUpdated', function (e) {
    $('#gettingValuesExample .days').html(timer.getTimeValues().days);
    $('#gettingValuesExample .hours').html(timer.getTimeValues().hours);
    $('#gettingValuesExample .minutes').html(timer.getTimeValues().minutes);
    $('#gettingValuesExample .seconds').html(timer.getTimeValues().seconds);
    $('#gettingValuesExample .secondTenths').html(timer.getTimeValues().secondTenths);

    $('#gettingTotalValuesExample .days').html(timer.getTotalTimeValues().days);
    $('#gettingTotalValuesExample .hours').html(timer.getTotalTimeValues().hours);
    $('#gettingTotalValuesExample .minutes').html(timer.getTotalTimeValues().minutes);
    $('#gettingTotalValuesExample .seconds').html(timer.getTotalTimeValues().seconds);
    $('#gettingTotalValuesExample .secondTenths').html(timer.getTotalTimeValues().secondTenths);
});


// Setting time values


var timer = new Timer();
timer.start({precision: 'seconds', startValues: {seconds: 90}, target: {seconds: 120}});

$('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());

timer.addEventListener('secondsUpdated', function (e) {
    $('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
    $('#startValuesAndTargetExample .progress_bar').html($('#startValuesAndTargetExample .progress_bar').html() + '.');
});

timer.addEventListener('targetAchieved', function (e) {
    $('#startValuesAndTargetExample .progress_bar').html('COMPLETE!!');
});

// Starta, pausa, stoppa och återställa (kronometer)

var timer = new Timer();
$('#chronoExample .startButton').click(function () {
    timer.start();
});

$('#chronoExample .pauseButton').click(function () {
    timer.pause();
});

$('#chronoExample .stopButton').click(function () {
    timer.stop();
});

$('#chronoExample .resetButton').click(function () {
    timer.reset();
});

timer.addEventListener('secondsUpdated', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});

timer.addEventListener('started', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});

timer.addEventListener('reset', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});


// Counting down

var timer = new Timer();
timer.start({countdown: true, startValues: {seconds: 30}});

$('#countdownExample .values').html(timer.getTimeValues().toString());

timer.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString());
});

timer.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('KABOOM!!');
});


// 