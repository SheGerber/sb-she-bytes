import $ from 'jquery';
import waypoints from '../../../../../node_modules/waypoints/lib/noframework.waypoints';


class ScrollShow {
	constructor(els, offset) {
		this.itemsToShow= els;
		this.offsetPerc = offset;
		this.hideFirst();
		this.createPoints();
	}

	hideFirst() {
		this.itemsToShow.addClass("show-items");
	}

	createPoints() {
		var that = this;
		this.itemsToShow.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("show-items--now");
				},
				offset: that.offsetPerc
			});
		});
	}

}

export default ScrollShow;