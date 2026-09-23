//your JS code here. If required.
function updateTimer() {
    let currentTime = new Date();

    document.getElementById("timer").innerText = currentTime;
}

updateTimer();

setInterval(updateTimer, 1000);