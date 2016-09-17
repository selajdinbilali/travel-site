import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(els, offset){
	this.itemsToReveal = els;
	this.offsetPercentage = offset;

	this.hideInitially();

	this.createWaypoints();
    }

    hideInitially(){
	this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(){
	var that = this;
	this.itemsToReveal.each(function(){
	    var currentItem = this; // 
	    // on a accès à cette classe
	    new Waypoint({
		element: currentItem, //le dom qu'on va watcher, on ne peut pas mettre this
		handler: function(){
		    $(currentItem).addClass("reveal-item--is-visible");
		},  //ce qu'il va se passer
		offset: that.offsetPercentage //par rapport au viewport quand faire le handler
	    });
	});
    }
}

export default RevealOnScroll;
