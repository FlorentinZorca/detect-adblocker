/**
 * Created by fzorca on 14.05.14.
 */

var detectAdBlocker = function (container, elementsWithoutAds, adBlockerCallback, errorCallback, noAdBlockerCallback){
    var callBack = function(callback, message){
        if(typeof callback === 'function'){
            callback(message);
        }
    };

    var containerNode;
    if (container){
        if(typeof container.appendChild === 'function') containerNode = container; // node passed
        else if (typeof container === 'string') containerNode = document.getElementById(container); // id passed
    }
    if (!containerNode){
        callBack(errorCallback, 'Cannot find ads container element ' + container);
        return;
    }

    if(containerNode.childElementCount <= elementsWithoutAds) callBack(adBlockerCallback, null);
    else callBack(noAdBlockerCallback, null);
}
