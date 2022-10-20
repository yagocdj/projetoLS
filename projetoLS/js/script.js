// the following variables won't be user as global variables because it's not pratical

let timerElement = document.querySelector('#chronometer');
let startButton = document.querySelector('#start-count');
let stopButton = document.querySelector('#stop-count');
let resetButton = document.querySelector('#reset-count');
let sec = 0;
let min = 0;
let hrs = 0;
let t;

// tick funtion - work with hours, minutes and seconds
function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

// add function - place the time inside the tag
function add() {
    tick();
    timerElement.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

// timer function - update the time every 1s (1000ms)
function timer() {
    t = setTimeout(add, 1000);
}

timer();
startButton.onclick = timer;
stopButton.onclick = function() {
    clearTimeout(t);
}
resetButton.addEventListener('click', function() {
    timerElement.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    sec = 0
    min = 0
    hr = 0
});

// TODO - make the chronometer start only when the user click on the start button
// TODO - make reset button reset the chronometer even if chornometer is 