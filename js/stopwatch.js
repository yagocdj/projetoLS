// import moment from 'moment';

/* let mainBody = document.querySelector('body'); */

let timerElement = document.querySelector('#stopwatch');
let startButton = document.querySelector('#start-count');
let stopButton = document.querySelector('#stop-count');
let resetButton = document.querySelector('#reset-count');
let removeSavedTimes = document.querySelectorAll('#reset-saved');
let tableBody = document.querySelector('tbody');
let saveButton = document.querySelector('#save-count');

let milisec = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let t;

let clicked = false;  // this variable allows the start button to be pressed only when the stopwatch is off
let arrayOfLaps = [];
let currentLap = 1;

// stopwatch funtion - work with hours, minutes and seconds
function stopwatch() {
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
        sec = 0;
    }

    timerElement.textContent = (hrs > 9 ? hrs : "0" + hrs) +
        	":" + (min > 9 ? min : "0" + min) +
       		":" + (sec > 9 ? sec : "0" + sec) +
            ":" + (milisec > 9 ? milisec : "0" + milisec);

    t = setTimeout(stopwatch, 7);
}

// DINAMIC ELEMENT
function insertLap(lap, time) {
    
    const lapElement = 
    `
    <tr>
        <td>${lap}</td>
        <td>${time}</td>
        <td id="lap-${lap}"></td>
    </tr>
    `;

    tableBody.insertAdjacentHTML('beforeend', lapElement);
}

startButton.addEventListener('click', () => {
    if (!clicked) {
        stopwatch();
    }
    clicked = true;
});

stopButton.addEventListener('click',() => {
    clearTimeout(t);
    clicked = false;
}); 


resetButton.addEventListener('click', () => {
    timerElement.textContent = "00:00:00:00";
    milisec = 0;
    sec = 0;
    min = 0;
    hrs = 0;
});

saveButton.addEventListener('click', () => {
    insertLap(currentLap, timerElement.textContent);
    arrayOfLaps.push(currentLap);
    currentLap++;
    console.log(arrayOfLaps);
});

// Drafts

// addTime function - place the time inside the tag
/* function addTime() {
    stopwatch();
    timerElement.textContent = (hrs > 9 ? hrs : "0" + hrs) +
        	":" + (min > 9 ? min : "0" + min) +
       		":" + (sec > 9 ? sec : "0" + sec) +
            ":" + (milisec > 9 ? milisec : "0" + milisec);
    timer();
}

// timer function - update the time every 10ms
function timer() {
    t = setTimeout(addTime, 10);  // 10ms
}
 */

// TODO - create and update a dataset that contains all the of the saved times

/* function insertChronometer(){
    const stopwatch = `<main class="container d-flex flex-row justify-content-center align-items-center">
    <div class="time-card px-3 py-2">
        <h2 class="mt-5 text-center"><time id=stopwatch>00:00:00</time></h2>
        <div class="d-flex justify-content-center gap-3 mt-4 mb-2">
            <button type="button" id="start-count" class="btn btn-success">Start</button>
            <button type="button" id="stop-count" class="btn btn-danger">Stop</button>
            <button type="button" id="reset-count" class="btn btn-secondary">Reset</button>
        </div>
    </div>
    <div></div>
</main>`

mainBody.insertAdjacentHTML('afterbegin', stopwatch)
} */
