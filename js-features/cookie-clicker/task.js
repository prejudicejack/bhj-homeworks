const coockieImage = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let clicks = 0;
let initialSize = true;

coockieImage.onclick = function(){
	clicks++
	clickerCounter.textContent = clicks;

	if (initialSize) {
		coockieImage.width = 300;
		coockieImage.height = 250;	
		initialSize = false;
	} else {
		coockieImage.width = 200;
		coockieImage.height = 127;
		initialSize = true;
	}
}