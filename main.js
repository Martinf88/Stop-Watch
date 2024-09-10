const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let displayTime = document.getElementById('display-time');

let timer = null;

function stopWatch() {
	milliseconds++;
	if (milliseconds == 100) {
		milliseconds = 0;
		seconds++
		if (seconds == 60) {
			seconds = 0;
			minutes++
			if (minutes == 60) {
				minutes = 0;
				hours++
			}
		}
	}

	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;
	let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

	displayTime.innerHTML = h +":"+ m +":"+ s +":"+ ms;
}

function watchStart() {
	if (timer !== null) {
		clearInterval(timer);
	}
	timer = setInterval(stopWatch, 10);
}

function watchStop() {
	clearInterval(timer);
}

function watchReset() {
	clearInterval(timer);
	[milliseconds, seconds, minutes, hours] = [0,0,0,0];
	displayTime.innerHTML = '00:00:00:00';
}

startButton.addEventListener('click', () => {
	watchStart()
})
stopButton.addEventListener('click', () => {
	watchStop()
})
resetButton.addEventListener('click', () => {
	watchReset()

})