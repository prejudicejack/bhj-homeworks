const allTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let newTooltip = document.createElement('div');
let tooltipText;

for(tooltip of allTooltips) {
	tooltip.addEventListener('click', onClick)
}

function onClick(event) {
	event.preventDefault();	
	const target = event.target;
	showTooltip(target);
}


function showTooltip(target) {
	if (target.nextElementSibling && target.nextElementSibling.classList.contains('tooltip_active')) {
    	target.nextElementSibling.classList.remove('tooltip_active');
    	return
    }

    tooltipText = target.title;
    newTooltip.className = 'tooltip tooltip_active';
    newTooltip.innerHTML = tooltipText;
    target.after(newTooltip);

    let position = target.getBoundingClientRect();
    newTooltip.style.left = position.left + 'px';
    newTooltip.style.position = 'absolute';
}