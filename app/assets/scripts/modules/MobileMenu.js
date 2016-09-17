import $ from 'jquery'; /* il est dans node-module */

class MobileMenu {
    constructor(){
	this.siteHeader = $(".site-header");

	this.menuIcon = $(".site-header__menu-icon");
	this.menuContent = $(".site-header__menu-content");
	this.events();
    }

    events(){
	this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu(){
	/* le this ci-dessou n'est plus associé à l'objet */
	/* il est associé au click qui l'appelle dans events */
	/* c'est pour ça qu'on utilise bind() */
	this.menuContent.toggleClass("site-header__menu-content--is-visible");
	this.siteHeader.toggleClass("site-header--is-expanded");
    }
}

export default MobileMenu;
