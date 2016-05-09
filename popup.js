// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	var loc = "javascript:(function(){$('.player-controls__btn_play').first().click();void(0)})();";
	chrome.tabs.query({"url":"https://music.yandex.ru/*"}, function(ts) {
		if (ts.length >= 1) {
			var t = ts[0];
			chrome.tabs.update(t.id, { "url": loc });
		}
	});
});
