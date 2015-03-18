// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	var loc = "javascript:(function(){$('.player-controls__btn_play').click();void(0)})();";
	chrome.tabs.query({"url":"https://music.yandex.ru/*"}, function(ts) {
		for (var i = 0; i < ts.length; i++) {
			var t = ts[i];
				chrome.tabs.update(t.id, { "url": loc });
		}
	});
});

/*
chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});

var i = 0;
window.setInterval(function() {
  chrome.browserAction.setBadgeText({text:String(i)});
  i++;
}, 1000);
*/