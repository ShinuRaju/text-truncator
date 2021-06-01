"use strict";
var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null || element === undefined || element.length === 0) {
        console.log('no element found');
    }
    else {
        return (element);
    }
};
var inputText = select('#inputText');
var truncateText = select('#truncateText');
var textLength = select('.textLength');
var radio = select('input[name="radio"]', true);
var radioValue = 'right';
var lengthOfTheText = 5;
var changeInRadio = function (e) {
    radioValue = e.target.value;
};
var rightLeftDecision = function (radVal, str, n) {
    var decided = str;
    var num = n;
    radioValue = radioValue.trim();
    if (radioValue === 'right') {
        var takeRight = decided.substring(0, num);
        return takeRight;
    }
    else {
        var takeLeft = decided.substring(decided.length - num, decided.length);
        return takeLeft;
    }
};
var changeTextLength = function () {
    lengthOfTheText = Number.parseInt(textLength.value);
};
// let truncateFunction = (n:number) => {
//     let actualString:string = rightLeftDecision(radioValue, inputText.value);
//     let truncatedText:string = actualString.substring(0, n);
//     // console.log('truncated', truncatedText)
//     return truncatedText
// }
var inputFunction = function () {
    // let inputValue = inputText.value;
    var truncatedWord = rightLeftDecision(radioValue, inputText.value, lengthOfTheText);
    truncateText.value = truncatedWord;
};
inputText.addEventListener('input', function () {
    inputFunction();
});
textLength.addEventListener('input', function () {
    changeTextLength();
    inputFunction();
});
radio.forEach(function (eachELe) {
    eachELe.addEventListener('change', function (e) {
        changeInRadio(e);
        inputFunction();
    });
});
