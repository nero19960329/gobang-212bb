$(document).ready(function() {
	reDeployLobby();
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
		var table = $($('.table')[i]);
		var table_num = $($('.tablenumber')[i]);
        table_num.html("-  " + (i + 1) + "  -");
		tables[i].css('margin-left', interval / 2);
		tables[i].css('margin-right', interval / 2);
	}
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