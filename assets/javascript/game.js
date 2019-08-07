
var targetNumber = function getRandomInteger(min, max) {

    min = Math.ceil(18);
    max = Math.floor(121);
    return Math.floor(Math.random() * (max - min)) + min;
}

$("#number-to-add").text(targetNumber);

var counter = 0;
