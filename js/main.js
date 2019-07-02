window.onload = () => {
	'use strict';
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js');
	}
}

var angle = 0;
function flip_coin(flips) {
	var coin = document.getElementById("coin");
	coin.style.transform = "rotateX("+(angle+flips*180)+"deg)";
	angle += flips*180;
}

function flip() {
	var flips = Math.floor((Math.random() * 7) + 3);
	flip_coin(flips);
	//var coin = document.getElementById("coin");
}

function alert(card) {
	card.style.background = "blue";
}

