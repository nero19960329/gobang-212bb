$(document).ready(function() {
	reDeployLobby();
});

$(window).resize(function() {
	reDeployLobby();
});

function setTables(tablenumber) {
	var lobbyarea = $('#lobbyarea');
	var count = Math.floor((lobbyarea.width() - 20) / 125);
	var interval = (lobbyarea.width() - 20 - 125 * count) / count;
	var tables = new Array(tablenumber);
	$('.tables').remove();
	for (var i = 0; i < tablenumber; ++i) {
		tables[i] = $('<div class="tables"></div>');
		var user1 = $('<div class="leftuser" />');
		var user2 = $('<div class="rightuser" />');
		var table = $('<div class="table" />');

		var randomNumber = parseInt(Math.random() * 4);
		if (randomNumber === 0) {
			table.css('background-image', 'url("/static/image/lobby_activetable.jpg")');
		} else {
			table.css('background-image', 'url("/static/image/lobby_emptytable.jpg")');
		}

		var tablenum = $('<div class="tablenumber">- ' + (i + 1) + ' -</div>');
		tables[i].append(user1);
		tables[i].append(table);
		tables[i].append(user2);
		tables[i].append(tablenum);
		tables[i].css('margin-left', interval / 2);
		tables[i].css('margin-right', interval / 2);
		lobbyarea.append(tables[i]);
	}
}

function reDeployLobby() {
	var section = $('section');
	section.css('width', $('body').width() - 10);
	section.css('height', $(window).height() - 180);
	var userlist = $('#userlist');
	userlist.css('height', ($(window).height() - 200) / 2);
	var friendlist = $('#friendlist');
	friendlist.css('height', ($(window).height() - 200) / 2);
	var lobbyarea = $('#lobbyarea');
	lobbyarea.css('width', $('body').width() - 278);
	lobbyarea.css('height', $(window).height() - 200);
	setTables(50);
}