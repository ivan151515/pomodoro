let breakTime = document.querySelector("#breakTime");
let sessionTime = document.querySelector("#sessionTime");
let cycle = document.querySelector("#cycle");
let increaseSession = document.querySelector("#increaseSession");
let decreaseSession = document.querySelector("#decreaseSession");
let increaseBreak = document.querySelector("#increaseBreak");
let decreaseBreak = document.querySelector("#decreaseBreak");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let stop = document.querySelector("#stop");
let restart = document.querySelector("#restart");
let sessionBreak = document.querySelector("h2");
let session = 25;
let rest = 5;
let selectedSession = 25;
let selectedRest = 5;
let seconds = "0";
let active = false;
play.addEventListener("click", (e) => {
    if (active) {
        return;
    }
    startCountdown();
});
restart.addEventListener("click", (e) => {
    clearInterval(active);
    active = false;
    session = 25;
    rest = 5;
    selectedRest = 5;
    selectedSession = 25;
    seconds = "0";
    updateBreakTime();
    updateSessionTime();
    updateClock();
});
pause.addEventListener("click", (e) => {
    clearInterval(active);
    active = false;
});
stop.addEventListener("click", (e)=> {
    clearInterval(active);
    active = false;
    session = selectedSession;
    rest = selectedRest;
    seconds = "0";
    updateBreakTime();
    updateSessionTime();
    updateClock();
});
increaseSession.addEventListener("click", (e) => {
    if (session < 60) {
        session += 1;
        selectedSession = session;
    }
    updateSessionTime();
    updateClock();
});
decreaseSession.addEventListener("click", (e) => {
    if (session > 5) {
        session -= 1;
        selectedSession = session;
    }
    updateSessionTime();
    updateClock();
});
increaseBreak.addEventListener("click", (e) => {
    if (rest < 30) {
        rest += 1;
        selectedRest = rest;
    }
    updateBreakTime();
});
decreaseBreak.addEventListener("click", (e) => {
    if (rest > 1) {
        rest -= 1;
        selectedRest = rest;
    }
    updateBreakTime();
});
console.log(breakTime, sessionTime, cycle);
function startCountdown() {
    //active = true;
    active = setInterval(function(){ 
        if (session == 0 && seconds == 0) {
            startBreak();
            return;
        }
        if (seconds === "00" || seconds == 0) {
            seconds = "59";
            session -= 1;
        }
        else {
             seconds -= 1
        } 
        if (seconds < 10) {
            seconds = "0" + seconds;
            cycle.textContent = session +":" + seconds;
            console.log(session +":" + seconds);
        }
        else {
        cycle.textContent = session +":" + seconds;
        console.log(session +":" + seconds);
        }
        }, 10);
        
}
function updateBreakTime() {
    breakTime.textContent = rest + " min";
}
updateBreakTime();
function updateSessionTime() {
    sessionTime.textContent = session + " min";
}
updateSessionTime();
function updateClock() {
    if (seconds < 10 && seconds.length < 2) {
        seconds = "0" + seconds;
    }
    cycle.textContent = session + ":" + seconds;
}
function startBreak() {
    sessionBreak.textContent = "Break";
    cycle.textContent = rest + ":" + seconds;
}
updateClock();

/*setInterval(function(){ cycle.textContent = minutes +":" + seconds;
console.log(minutes +":" + seconds)
if (seconds === "00" || seconds == 0) {
    seconds = "59";
    minutes -= 1;
}
else seconds -= 1 }, 300);*/