const tabItem = Array.from(document.getElementsByClassName("tab"));
const contentTab = Array.from(document.getElementsByClassName("tab__content"));

for(i = 0;i < tabItem.length; i++) {
	let tab = tabItem[i];
	let tabItemIndex = tabItem.indexOf(tab);

	tab.addEventListener('click', onClick);

	function onClick() {
		const activeTab = document.querySelector('.tab_active');
		const activeTabContent = document.querySelector('.tab__content_active');

		activeTab.className = "tab";
		activeTabContent.className = "tab__content";

		tab.className += " tab_active";
		contentTab[tabItemIndex].className += " tab__content_active"
	}
}