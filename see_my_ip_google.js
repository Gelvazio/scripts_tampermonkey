
// ==UserScript==
// @name         NO RASTREIO
// @namespace    FFFFFFFFFFF
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        none
// ==/UserScript==

var a;
$.getJSON("https://jsonip.com?callback=?", function(data) {
    a = data;
    document.getElementById("footcnt").innerHTML = '';
    document.getElementById("footcnt").innerHTML = '<center> #|<span>'+ a.ip + '|#<center></span>';
});
