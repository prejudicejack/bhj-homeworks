const tabItem = Array.from(document.getElementsByClassName("tab"));
const contentTab = Array.from(document.getElementsByClassName("tab__content"));

tabItem.forEach(element => element.addEventListener('click', onClick));

function onClick(event) {
	tabItem.forEach(element => element.className = 'tab');
	event.target.classList.add('tab_active');
	contentTab.forEach(element => element.className = 'tab__content');
	const tabItemIndex = tabItem.indexOf(event.target);
	contentTab[tabItemIndex].classList.add('tab__content_active');
}