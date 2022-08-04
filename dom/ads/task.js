setInterval(function changeCaseAfter() {
	let activeCase = document.querySelector('.rotator__case_active');
	let nextCase = activeCase.nextElementSibling;
	let currentCase = nextCase ? nextCase : activeCase.parentElement.firstElementChild;
	activeCase.classList.remove('rotator__case_active');
	currentCase.classList.add('rotator__case_active')
}, 1000)