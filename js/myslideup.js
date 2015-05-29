// JavaScript Document
(function($){
	$.fn.extend({
		"slideUp":function(value){
			
			var docthis = this;
			//默认参数
			value=$.extend({
				 "li_h":"350",
				 "time":20,
				 "movetime":10
			},value)
			
			var i = 0;
			//向上滑动动画
			function autoani(){
				i++;
				i = i % value.li_h;
				$("li:first",docthis).animate({"margin-left":-i},value.movetime,function(){
					//$(this).css("margin-left",0).appendTo(".line");
				});
				$("li:eq(1)",docthis).animate({"margin-left":0},value.movetime,function(){
					
				});
			}
			
			//自动间隔时间向上滑动
			var anifun = setInterval(autoani,value.time);
			
			//悬停时停止滑动，离开时继续执行
			$(docthis).children("li").hover(function(){
				clearInterval(anifun);			//清除自动滑动动画
			},function(){
				anifun = setInterval(autoani,value.time);	//继续执行动画
			})
		}	
	})
})(jQuery)