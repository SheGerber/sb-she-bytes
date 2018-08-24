import $ from 'jquery';
import waypoints from '../../../../../node_modules/waypoints/lib/noframework.waypoints';


class ZagOnShow {
	constructor(els, offset) {
		this.itemsToMove= els;
		this.offsetPerc = offset;
		this.createPoints();
	}

	createPoints() {
		var that = this;
		this.itemsToMove.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("zigzag--move");
				},
				offset: that.offsetPerc
			});
		});
	}
}

export default ZagOnShow;