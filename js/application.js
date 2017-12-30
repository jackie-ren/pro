(function() {
	$.fn.extend({
		changeSize:function(w,h,ratio){
			this.css({"width":w,height:h});
			this.attr("init");
		}
	});
});