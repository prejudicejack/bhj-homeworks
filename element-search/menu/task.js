const menuLink = document.getElementsByClassName("menu__link");

for (i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        const menuMain = this.closest("ul");
        const menuSub = this.parentElement.querySelector('.menu_sub');

        if(menuMain.className === "menu menu_main") {
            const menuActive = menuMain.querySelector('.menu_active');

            if(menuActive && (menuActive !== menuSub)) {
                menuActive.className === "menu menu_sub"
            }

            if(menuSub.className === 'menu menu_sub') {
                menuSub.className = 'menu menu_sub menu_active'
            } else {
                menuSub.className = 'menu menu_sub';
            } 
        }
        return false; 
    }
}