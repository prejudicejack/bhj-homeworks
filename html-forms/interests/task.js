const allCheckboxes = document.querySelectorAll('.interest__check')

for(let checkbox of allCheckboxes) {
	checkbox.checked = false
}

allCheckboxes.forEach(checkbox => checkbox.addEventListener('change', selectAllCheckboxes));

function selectAllCheckboxes(event) {
	const parent = event.target.closest('.interest');
	const children = parent.querySelectorAll('.interest__check')

	for(let child of children) {
		child.checked = this.checked;
	}
}