$(document).ready(function() {
	reDeployLobby();
	setInterval(lobby_data, 1000);
});

$(window).resize(function() {
	reDeployLobby();
});

function setTables() {
    var tablenumber = $('.tables').length;
	var lobby_area = $('#lobbyarea');
	var count = Math.floor((lobby_area.width() - 20) / 125);
	var interval = (lobby_area.width() - 20 - 125 * count) / count;
	var tables = new Array(tablenumber);
	for (var i = 0; i < tablenumber; ++i) {
		tables[i] = $($('.tables')[i]);
        var leftuser = $($('.leftuser')[i]);
        var rightuser = $($('.rightuser')[i]);
        (function(index) {
            leftuser.mouseup(function(e) {
                if (e.which === 1) {
                    user_getinRoom(index);
                }
            });
            rightuser.mouseup(function(e) {
                if (e.which === 1) {
                    user_getinRoom(index);
                }
            })
        })(i);
		var table = $($('.table')[i]);
		var table_num = $($('.tablenumber')[i]);
        table_num.html("-  " + (i + 1) + "  -");
		tables[i].css('margin-left', interval / 2);
		tables[i].css('margin-right', interval / 2);
	}
}

function lobby_data() {
	$.getJSON("/lobby_data/", {'lid': lobby_id}, function(ret) {
		var tablerows = $('#userlist .tablerow');
		tablerows.remove();
		var user_length = ret.lobby_users.length;
		for (var i = 0; i < user_length; ++i) {
			var row = $('<tr class="tablerow"><td>' + ret.lobby_users[i].name + '</td><td>0</td><td>0</td><td>0</td><td>0</td>/tr>');
			$($('.tablelist')[1]).append(row);
		}
	});
}

function user_getinRoom(room_id) {
    $('#id_uid').attr('value', curr_user.uid);
    $('#id_lid').attr('value', 1);
    $('#id_rid').attr('value', room_id);
    document.into_room_form.action = "/gobang/";
    document.into_room_form.submit();
}

function reDeployLobby() {
	var section = $('section');
	section.css('width', $('body').width() - 10);
	section.css('height', $(window).height() - 180);
	var userlist = $('#userlist');
	userlist.css('height', ($(window).height() - 200) / 2);
    userlist.css('overflow-y', 'scroll');
	var friendlist = $('#friendlist');
	friendlist.css('height', ($(window).height() - 200) / 2);
    friendlist.css('overflow-y', 'scroll');
	var lobbyarea = $('#lobbyarea');
	lobbyarea.css('width', $('body').width() - 278);
	lobbyarea.css('height', $(window).height() - 200);
	setTables();
}