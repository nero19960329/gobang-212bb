var iconNum = 0;
var window_width, window_height;
$(window).load(function(){
	/*window.onresize = function(){
		$("#mask").width() = $(window).width();
		$("#mask").height() = $(window).height();
	}*/
	$("#regbutton").click(function(){
		$("#mask").css("display","block");
		$("#regbox").css("display","block");
		var boxes = $(".iconbox");
		for(var i=0; i<boxes.length; i++){
			$(boxes[i]).css("height",$(boxes[i]).width());
			var l = 0.2 * (i % 5) * $(".chooseicon").width() + "px";
			var t = (0.3 * parseInt(i / 5)+0.1) * $(".chooseicon").height() + "px";
			$(boxes[i]).css({
				left: l,
				top: t
			});
			$(".iconbox").eq(i).click(function(){
				for(var j=0; j<boxes.length; j++){
					$(boxes[j]).css("border",'');
				}
				$(this).css({
					"border":"5px solid red"
				});
				for(var k=1; k<11; k++){
					var imageName = this.getElementsByTagName("img")[0].getAttribute("src");
					if(imageName == "/static/image/login_icon" + k + ".jpg"){
						iconNum = k;
						document.getElementById('iconnum').value = iconNum + '';
					}
				}
			});
		}
	});
	$("#cancel").click(function(){
		$("#mask").css("display","none");
		$("#regbox").css("display","none");
		$("#passwordbox").css("display", "none");
	});
	$("#cancel1").click(function(){
		$("#mask").css("display","none");
		$("#namebox").css("display","none");
	});
	window_width = $(window).width();
	window_height = $(window).height();
	$(".login_box").css({
		left: 0.15 * window_width + "px",
		top: 0.20 * window_height + "px",
		width: 380 / 1899 * window_width + "px",
		height: 540 / 800 * window_height + "px"
	});
	$(".room_box").css({
		left : 0.45 * window_width + "px",
		top: 0.20 * window_height + "px",
		width: 800 / 1899 * window_width + "px",
		height: 540 / 800 * window_height + "px"
	});
});

$(window).resize(function(){
	window_width = $(window).width();
	window_height = $(window).height();
	$(".login_box").css({
		left: 0.15 * window_width + "px",
		top: 0.20 * window_height + "px",
		width: 380 / 1899 * window_width + "px",
		height: 540 / 800 * window_height + "px"
	});
	$(".room_box").css({
		left : 0.45 * window_width + "px",
		top: 0.20 * window_height + "px",
		width: 800 / 1899 * window_width + "px",
		height: 540 / 800 * window_height + "px"
	});
	$("#loginbutton").css({
		"font-size": 20 * window_width / 1899 + "px"
	});
	$("#regbutton").css({
		"font-size": 20 * window_width / 1899 + "px"
	});
	$("#roomlist").css({
		"height": 235 * window_height / 800 + "px"
	});
	$("#iconbox").css({
		"width": 0.5 * 380 / 1899 * window_width + 'px'
	});
});