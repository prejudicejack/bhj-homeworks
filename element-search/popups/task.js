const modal_main = document.getElementById('modal_main');
modal_main.className += " modal_active";

const modal_close = document.getElementsByClassName('modal__close');

for(i=0; i<modal_close.length; i++) {
	modal_close[i].onclick = function() {
		modal_main.className = "modal";
	}
}

const element_success = document.getElementsByClassName('show-success');
const modal_success = document.getElementById('modal_success');

for(i=0; i<element_success.length; i++) {
	element_success[i].onclick = function() {
		modal_main.className = "modal";
		modal_success.className += " modal_active";

		for(i=0; i<modal_close.length; i++) {
			modal_close[i].onclick = function() {
				modal_success.className = "modal";
			}
		}
	}
}