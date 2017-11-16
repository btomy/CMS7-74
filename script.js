 /**
 * TITLE:
 * @component: Table of Contents
 *
 * AUTHOR:
 * Citizens Advice: Front-end
 *
 * DESCRIPTION:
 * Populating Table of contents:
 * TOC will be added if the advisor is logged in
 *
 * README:
 *
 *
 * API:
 *
 *
 */

'use strict';

$( document ).ready(function() {

    var TableOfContents = (function () {
        
        var tocItems = $('.ref-heading__heading'); 
        var tocItemsID = $('.ref-heading');
        var adviceContent = document.getElementsByClassName("articleContent");
        var advisorLogin = ($('input[name*="astat"]').val());
        var tocArray = [];
        var tocList;

        function addingToTOC(text,id) {
            $.each(text, function (i, item) {
                 var tempObj = { 
                    id: id[i].id, 
                    content: item.textContent
                };
                tocArray.push(tempObj);
    		});
        };

        function populateTOC() {
            var tempItems = '';
            addingToTOC(tocItems,tocItemsID);
            tocArray.shift(); //removing the first element in the array. As this is the title of the page
            tocArray.forEach(function(item){
                tempItems += '<li><a href=#' + item.id + '>' + item.content + '</a></li>';
            });
            return tocList = (
                '<div class="well tertiary">'+
                    '<h5> On this page </h5>'+
                    '<ul class="ul--2-column">'+
                        tempItems+
                    '</ul>'+
                '</div>'
            );
        };

        function renderList() {
            if (advisorLogin === 'True' ) {
                populateTOC();
                $(adviceContent).prepend(tocList);
            }
        }

        return{
            render: renderList
        }

    })();


    TableOfContents.render(); //This will return a list of all the Titles in a Div
});

