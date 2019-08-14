// ==UserScript==
// @name         Speechlogger Caption
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Turn Speechlogger into a real-time captioning tool
// @author       zhaozdi@gmail.com
// @match        https://speechlogger.appspot.com/zh/
// @grant        none
// ==/UserScript==

// @require https://code.jquery.com/jquery-3.4.1.min.js

(function() {
    'use strict';

    // Your code here...
    $(".dropdown_banner_title").css({"padding":"0 20px 0 20px","text-align":"center","font-size":"50%","word-wrap":"break-word"});
    $("#final_translation").bind("DOMSubtreeModified",(function(){
        $(".dropdown_banner_title").text($("#final_translation").children().last().children().first().text());
    }))
})();
