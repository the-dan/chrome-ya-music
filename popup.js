// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	var loc = "javascript:(function(){if (Mu.Player.isPaused() || Mu.Player.isPlaying()) { if (Mu.Player.isPaused()) { Mu.Player.resume(); } else if (Mu.Player.isPlaying()) { Mu.Player.pause(); } };void(0)})();";
	chrome.tabs.query({"url":"http://music.yandex.ru/*"}, function(ts) {
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