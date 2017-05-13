var miliSec = "00";
var sec = "00";
var minutes = "00";
var hours = "00";
var increamentSec;
var show = document.getElementById('screen');
function start() {
	increamentSec = setInterval(function () {
		time()
	},1)
}

function time(){
	miliSec++;
	if(miliSec < 10){
		miliSec = "000" + miliSec;
	}else if(miliSec < 100){
		miliSec = "00" + miliSec;
	}else if(miliSec < 1000){
		miliSec = "0" + miliSec;
	}

	if(miliSec === 1000){
		miliSec = "00";
		sec++;
		if(sec < 10){
			sec = "0" + sec;
		}
	}
	if(sec === 60){
		sec = "00";
		minutes++;
		if(minutes < 10){
			minutes = "0" + minutes;
		}

	}
	show.innerHTML = hours + ":" + minutes + ":" + sec + ":" + miliSec;
}


function stop() {
	clearInterval(increamentSec);
}


function reset() {
	miliSec = "0000";
	sec = "00";
	minutes = "00";
	hours = "00";
	show.innerHTML = hours + ":" + minutes + ":" + sec + ":" + miliSec;
}
