/**
 * Populating Table of contents:
 * TOC will be added if the advisor is logged in
 *
 * Author: @Citizens Advice
 */

'use strict';

var TableOfContents = (function () {
    
    var tocItems = $('h2.js-ref'); 
    var adviceContent = document.getElementsByClassName("articleContent");
    var advisorLogin = ($("input[name*='radio-inline']").val()); 
    var tocArray = [];
    var tocList;

    function addingToTOC(options) {
        $(options).each(function() {
            var tempObj = { 
                id: this.id, 
                content: this.textContent 
            };
            tocArray.push(tempObj);
        });
    };

    function populateTOC() {
        var tempItems = '';
        addingToTOC(tocItems);
        tocArray.forEach(function(item){
            tempItems += "<li><a href=#" + item.id + ">" + item.content + "</a></li>";
        });
        return tocList = ("<div class='well TOC'><span> On this page </span><ul> " + tempItems + " </ul></div>");
    };

    function renderList() {
        if (advisorLogin === "yes" ) {
            populateTOC();
            $(adviceContent).prepend(tocList);
        }
    }

    return{
        render: renderList
    }

})();

TableOfContents.render(); //This will return a list of all the Titles in a Div