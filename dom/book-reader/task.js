const sizes = Array.from(document.getElementsByClassName("font-size"))
const book = document.querySelector('.book')

sizes.forEach(element => element.addEventListener('click', onClick));

function onClick(event) {
	event.preventDefault();
	sizes.forEach(element => {
		if(element.classList.contains('font-size_active')) {
			element.classList.remove('font-size_active');
			book.classList.remove('book_fs-big');
			book.classList.remove('book_fs-small');
		} 
	});
	event.target.classList.add('font-size_active');

	if(this.classList.contains('font-size_active') && this.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small')
		};
		if(this.classList.contains('font-size_active') && this.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big')
		};
		if(this.classList.contains('font-size_active') && (!this.classList.contains('font-size_big') && !this.classList.contains('font-size_small'))) {
			book.className = 'book'	
		}
}