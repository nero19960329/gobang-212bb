var iconNum = -1;
$(window).load(function(){
	/*window.onresize = function(){
		$("#mask").width() = $(window).width();
		$("#mask").height() = $(window).height();
	}*/
	$("#regbutton").click(function(){
		var boxes = $(".iconbox");
		$("#mask").css("display","block");
		$("#regbox").css("display","block");
		for(var i=0; i<boxes.length; i++){
			$(boxes[i]).css("height",$(boxes[i]).width());
			var l = 0.2 * (i % 5) * $(".chooseicon").width() + "px";
			var t = (0.3 * parseInt(i / 5)+0.1) * $(".chooseicon").height() + "px";
			$(boxes[i]).css({
				left: l,
				top: t
			})
			$(".iconbox").eq(i).click(function(){
				for(var j=0; j<boxes.length; j++){
					$(boxes[j]).css("border",'');
				}
				$(this).css({
					"border":"5px solid red"
				});
				iconNum = i;
			});
		}
	});
	$("#confirm").click(function(){
		$("#mask").css("display","none");
		$("#regbox").css("display","none");
	});
	$("#cancel").click(function(){
		$("#mask").css("display","none");
		$("#regbox").css("display","none");
	});
});
