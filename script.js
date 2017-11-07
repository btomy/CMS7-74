'use strict';

$(function () {
    
    var tocItems = $('h2.js-ref'); 
    var advisorLogin = $("input[name*='pageRatingYes']"); 
    var tocArray = [];

    var testArray =[];

    var tocContents = {
        'id' : '',
        'text': ''
    };

    if (advisorLogin) {
        createTitlteList(tocItems);
        returnArrayItems(tocArray);
        console.log("");
    }


    function createTitlteList(item) {
        tocArray.push(item);
        return tocArray;
    };


    function returnArrayItems(array) {

        array.forEach(function(options) {
            
            for(var i = 0; i < options.length; i++)
            {  
             tocContents.id = options[i].id ;
             tocContents.text = options[i].innerText ;         
            }
            testArray.push(tocContents)

        });
        return testArray;
    }

}());