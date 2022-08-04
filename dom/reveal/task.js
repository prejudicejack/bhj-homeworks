const div =  Array.from(document.getElementsByClassName('reveal'));

function isVisible(el) {
	div.forEach(el => {
		const { top, bottom } = el.getBoundingClientRect();
		if(bottom < 0 || top > window.innerHeight) {
			el.className = 'reveal';
		}
		else {
			el.classList.add('reveal_active');
			if(bottom < 0 || top > window.innerHeight) {
				el.className = 'reveal';
			}
		}
	})
}

window.addEventListener('scroll', isVisible)