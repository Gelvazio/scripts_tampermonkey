
// ==UserScript==
// @name         NO ADS
// @namespace    FFFFFFFF
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require      https://code.jquery.com/jquery-2.2.3.min.js
// @grant        none
// ==/UserScript==

(function() {
	function getId(){
		var video_id = window.location.search.split('v=')[1];
		var ampersandPosition = video_id.indexOf('&');
		if(ampersandPosition != -1) {
			video_id = video_id.substring(0, ampersandPosition);
		}
		return video_id;
	}
	if(document.getElementsByClassName("ytp-large-play-button ytp-button")[0] != undefined){
		document.getElementsByClassName("ytp-large-play-button ytp-button")[0].click()
	}
	document.getElementsByClassName("style-scope ytd-topbar-logo-renderer").innerHTML = '<a>rEddy</a>';
	setInterval(function(){
		if(document.getElementsByClassName("video-ads ytp-ad-module") != undefined){
		   document.getElementsByClassName("video-ads ytp-ad-module").innerHTML = '';
		}
		if(document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer") != undefined){
		   document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer").innerHTML = '';
		}
		if(document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer yt-simple-endpoint") != undefined){
		   document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer yt-simple-endpoint").innerHTML = '';
		}
		if(document.getElementsByClassName("style-scope ytd-search-pyv-renderer") != undefined){
		   document.getElementsByClassName("style-scope ytd-search-pyv-renderer").innerHTML = '';
		}
		if(document.getElementsByClassName("style-scope ytd-video-masthead-ad-v3-renderer")[0] != undefined){
		   document.getElementsByClassName("style-scope ytd-video-masthead-ad-v3-renderer")[0].click();
		   document.getElementsByClassName("style-scope ytd-video-masthead-ad-v3-renderer").innerHTML = ''
		}
		if(document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0] != undefined){
		   document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click();
		}
		if(document.getElementsByClassName("ytp-ad-overlay-close-button")[0] != undefined){
		   document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
		}
		if(document.getElementById("ad-text:s") != undefined){
			document.getElementById("ad-text:s").click()
		}
		if(document.getElementById("masthead-ad") != undefined){
			document.getElementById("masthead-ad").innerHTML = '';
		}
		if(document.getElementById("player-ads") != undefined){
			document.getElementById("player-ads").innerHTML = '';
		}
		if(document.getElementById("show-ad") != undefined){
			document.getElementById("show-ad").innerHTML = '';
		}
	}, 2000)
})();
