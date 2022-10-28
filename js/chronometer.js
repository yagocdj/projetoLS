/* let mainBody = document.querySelector('body'); */

let timerElement = document.querySelector('#chronometer');
let startButton = document.querySelector('#start-count');
let stopButton = document.querySelector('#stop-count');
let resetButton = document.querySelector('#reset-count');
let tableBody = document.querySelector('tbody');
let saveButton = document.querySelector('#save-count');
let milisec = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let t;
let clicked = false;  // this variable allows the start button to be pressed only when the chronometer is off

// tick funtion - work with hours, minutes and seconds
function tick() {
    milisec++
    if (milisec == 100) {
        sec++;
        milisec = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        hrs++;
        min = 0;
    }
}

// add function - place the time inside the tag
function add() {
    tick();
    timerElement.textContent = (hrs > 9 ? hrs : "0" + hrs)
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec)
             + ":" + (milisec > 9 ? milisec : "0" + milisec);
    timer();
}

// timer function - update the time every 10ms
function timer() {
    t = setTimeout(add, 10);  // 10ms
}


startButton.addEventListener('click', function() {
    if (!clicked) {
        timer();
    }
    clicked = true;
});

stopButton.addEventListener('click',function() {
    clearTimeout(t);
    clicked = false;
});


resetButton.addEventListener('click', function() {
    timerElement.textContent = "00:00:00:00";
    milisec = 0;
    sec = 0;
    min = 0;
    hrs = 0;
});

// Functions for make dinamic elements

// TODO - dinamic element (using map function) to insert rows on the table
// TODO - create and update a dataset that contains all the of the saved times

function registerTime(lap, time) {
    
}

saveButton.addEventListener('click', function() {
    tableBody.innerHTML = ``;
});

/* function insertChronometer(){
    const chronometer = `<main class="container d-flex flex-row justify-content-center align-items-center">
    <div class="time-card px-3 py-2">
        <h2 class="mt-5 text-center"><time id=chronometer>00:00:00</time></h2>
        <div class="d-flex justify-content-center gap-3 mt-4 mb-2">
            <button type="button" id="start-count" class="btn btn-success">Start</button>
            <button type="button" id="stop-count" class="btn btn-danger">Stop</button>
            <button type="button" id="reset-count" class="btn btn-secondary">Reset</button>
        </div>
    </div>
    <div></div>
</main>`

mainBody.insertAdjacentHTML('afterbegin', chronometer)
} */
