var mycolor = "white";
var myturn = true;
var all_pieces = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
//0记录空格子，1记录黑棋，2记录白棋
var length_block;
var length_border;
var player1 = new Object();
var player2 = new Object();

function init_gobang(){
	if (myturn == true) {
		if (mycolor == "black") {
			$('.checkerboard').css("cursor","url('/static/image/gobang_black_piece_icon.ico'),auto");
		}else{
			$('.checkerboard').css("cursor","url('/static/image/gobang_white_piece_icon.ico'),auto");
		}
	}
	$('.pieces').empty();
	viewH =$(this).height();
  viewW =$(this).width();
  var container_height = 0.8 * viewH,
  container_width = 1.8 * container_height,
  container_top = 0.1 * viewH,
  container_left = 0.5 * (viewW - container_width),
  checkerboard_height = container_height,
  checkerboard_width = container_height,
  checkerboard_left = 0.5 * (container_width - checkerboard_width);
  length_border = 22 / 538 * checkerboard_width,
  length_block = (checkerboard_width - 2 * length_border) / 14;
  height_button = container_height / 20;
  width_button = 0.19 * checkerboard_width;
  $('.myButton').css({
  	'width': width_button
  });
	$('.gobang_container').css({
		'height':container_height,
		'width':container_width,
		'top':container_top,
		'left':container_left
	});
	$('.checkerboard').css({
		'height':container_height,
		'left':checkerboard_left,
		'width':checkerboard_width
	});
	$('.checkerboard_img').css({
		'height':checkerboard_height,
		'width':checkerboard_width
	});
	
  $('#giveup_button').css({
  	'bottom': - height_button - 20,
  	'left': 0
  });
  $('#start_button').css({
  	'bottom': - height_button - 20,
  	'left': 0.27 * container_height
  });
  $('#pause_button').css({
  	'bottom': - height_button - 20,
  	'left': 0.54 * container_height
  });
  $('#draw_button').css({
  	'bottom': - height_button - 20,
  	'left': 0.81 * container_height
  });
  $('.player').css({
  	'height': 0.5 *container_height - 10,
  	'width': 0.5 * (container_width - checkerboard_width) - 10,
  	'left': '5px'	
  });
  $('.player1').css('top', '2px');
  $('.player2').css('bottom', '2px');
  $('.player_pic').css({
  	'height': 0.25 *container_height,
  	'width': 0.5 * (container_width - checkerboard_width)-20,
  	'left': '5px',
  	'top': '5px'
  });
  $('.player_info').css('top', 0.25 *container_height + 15);
  $('.player1_pic').attr('src',player1.pic);
  $('.player2_pic').attr('src',player2.pic);
  $('.player1_name').html(player1.name);
  $('.player2_name').html(player2.name);
  $('.user_info').css({
  	'height': 0.4 *container_height - 10,
  	'width': 0.5 * (container_width - checkerboard_width) - 10,
  	'right': '5px',
  	'top': '2px'
  });
  $('.chatroom').css({
  	'height': 0.6 *container_height - 10,
  	'width': 0.5 * (container_width - checkerboard_width) - 10,
  	'right': '5px',
  	'bottom': '2px'
  });
	for (var i = 0; i < 15; i++) {
		for (var j = 0; j < 15; j++) {
			if (all_pieces[i][j] != 0) {
				var piecediv = $('<li>');
				var pieceimgdiv = $('<img>');
				pieceimgdiv.attr({
					"class":"piece",
					"style":"height:" + (length_block) + "px;width:" + (length_block) + "px;top:" + ((j - 0.5) * length_block + length_border) + "px;left:" + ((i - 0.5) * length_block + length_border) + "px"
				});
				if (all_pieces[i][j] == 1) {
					pieceimgdiv.attr("src","/static/image/gobang_black_piece.png");
				}else{
					pieceimgdiv.attr("src","/static/image/gobang_white_piece.png");
				}
				pieceimgdiv.appendTo(piecediv);
				piecediv.appendTo('.pieces');
			}
		}
	}
}

function isEmptyObject(obj) {
    for (var name in obj) {
        return false;
    }
    return true;
}

function load_player_data(){
    if (isEmptyObject(player_1) === false) {
        player1.name = player_1.name;
        player1.score = 100;
        player1.win_num = 10;
        player1.lose_num = 1;
        player1.tie_num = 2;
        player1.pic = "/static/image/pic (93).jpg";
        player1_piececolor = "white";
    }
    if (isEmptyObject(player_2) === false) {
        player2.name = player_2.name;
        player2.score = 100;
        player2.win_num = 10;
        player2.lose_num = 1;
        player2.tie_num = 2;
        player2.pic = "/static/image/pic (95).jpg";
        player2_piececolor = "black";
    }
}

function addPiece(){
	if (myturn == true) {
		var objTop = $(".checkerboard").css("top");//对象x位置
		var objLeft = $(".checkerboard").css("left");//对象y位置
		var objTop1 = $(".gobang_container").css("top");
		var objLeft1 = $(".gobang_container").css("left");
		var mouseX = event.clientX+document.body.scrollLeft + 16;//鼠标x位置
		var mouseY = event.clientY+document.body.scrollTop + 16;//鼠标y位置

		var objX = parseInt((mouseX - parseInt(objLeft) - parseInt(objLeft1)- length_border) / length_block + 0.5);
		var objY = parseInt((mouseY - parseInt(objTop) - parseInt(objTop1) - length_border) / length_block + 0.5);
		if (all_pieces[objX][objY] == 0) {
			if (mycolor == "black") {
				all_pieces[objX][objY] = 1;
				mycolor = "white";
				$('.checkerboard').css("cursor","url('/static/image/gobang_white_piece_icon.ico'),auto");
			}else{
				all_pieces[objX][objY] = 2;
				mycolor = "black";
				$('.checkerboard').css("cursor","url('/static/image/gobang_black_piece_icon.ico'),auto");
			}
			var piecediv = $('<li>');
			var pieceimgdiv = $('<img>');
			pieceimgdiv.attr({
				"class":"piece",
				"style":"height:" + (length_block) + "px;width:" + (length_block) + "px;top:" + ((objY - 0.5) * length_block + length_border) + "px;left:" + ((objX - 0.5) * length_block + length_border) + "px"
			});
			if (all_pieces[objX][objY] == 1) {
				pieceimgdiv.attr("src","/static/image/gobang_black_piece.png");
			}else{
				pieceimgdiv.attr("src","/static/image/gobang_white_piece.png");
			}		
			pieceimgdiv.appendTo(piecediv);
			piecediv.appendTo('.pieces');
			if (checkEnd(objX, objY) == true) {
				alert("game over");
			}
			// myturn = false;
		}
	}
}

function checkEnd(x, y){
	var temp = all_pieces[x][y];
	var continuous_num = 0;
	//向右连成五子
	for (var i = x, j = y; i <= x + 4 && i<= 14; i++) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//右下
	for (var i = x, j = y; i <= x + 4 && i<= 14 && j <= y + 4 && j<= 14; i++,j++) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//下
	for (var i = x, j = y; j <= y + 4 && j<= 14; j++) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//左下
	for (var i = x, j = y; i >= x - 4 && i >= 0 && j <= y + 4 && j <= 14; i--, j++) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//左
	for (var i = x, j = y; i >= x - 4 && i >= 0; i--) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//左上
	for (var i = x, j = y; i >= x - 4 && i >= 0 && j >= x - 4 && j >= 0; i--, j--) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//上
	for (var i = x, j = y; j >= x - 4 && j >= 0; j--) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;

	//右上
	for (var i = x, j = y; i <= x + 4 && i<= 14 && j >= x - 4 && j >= 0; i++,j--) {
		if (all_pieces[i][j] == temp) {
			continuous_num++;
			if (continuous_num == 5) {
				return true;
			}
		}else{
			break;
		}
	}
	continuous_num = 0;
	return false;
}

$(window).resize(function(){
	init_gobang();
});