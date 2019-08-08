$(document).ready(function () {
    // this is to get the random number for the number to add up to
    var targetNumber = function getRandomInteger(min, max) {

        min = Math.ceil(18);
        max = Math.floor(121);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    $("#number-to-add").text(targetNumber);

    // this part is to get a random number between 1 and 12 for each crystal image 
    var gems = Math.floor(Math.random() * 12) + 1;
    
    var wins = 0;
    var losses = 0;
    var totalScore =0;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#your-score").text(totalScore);


});