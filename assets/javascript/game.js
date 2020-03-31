$(document).ready(function () {
    // this is to get the random number for the number to add up to
    var targetNumber = function getRandomInteger(min, max) {

        min = Math.ceil(18);
        max = Math.floor(121);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    $("#number-to-add").text(targetNumber);

    // this part is to get a random number between 1 and 12 for each crystal image 
    //var crystalsNumber = Math.floor(Math.random() * 12) + 1;

    // pushing the text for wins losses and score to the page
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#your-score").text(totalScore);

    var magenta = Math.floor(Math.random() * 12) + 1;
    console.log(magenta);
    //$("#magenta").html("<img src='assets/images/magenta_crystal-512-100x100.png'>");

    var blue = Math.floor(Math.random() * 12) + 1;
    console.log(blue);
    //$("blue").html("<img src='assets/images/blue_crystal-512-100x100.png'>");

    var green = Math.floor(Math.random() * 12) + 1;
    console.log(green);
    //$("#magenta").html("<img src='assets/images/green_crystal_copy-512-100x100.png'>");

    var red = Math.floor(Math.random() * 12) + 1;
    console.log(red);
    //$("#red").html("<img src='assets/images/red_crystal-512-100x100.png'>");
    function reset() {
        magenta = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;
        red = Math.floor(Math.random() * 12) + 1;
        totalScore = 0;
        targetNumber = function getRandomInteger(min, max) {

            min = Math.ceil(18);
            max = Math.floor(121);
            return Math.floor(Math.random() * (max - min)) + min;
            
        };
        $("#number-to-add").text(targetNumber);
      
    };

    function winner() {
        alert("You've won the game!");
        wins++;
        reset();
    };

    function loser() {
        alert("To bad, would you like to play again?")
        losses++;
        reset();
    };



    $("#magenta").on("click", function () {
        $("#your-score").text(totalScore);
        totalScore = totalScore + magenta;
        if (totalScore === targetNumber) {
            winner();
        }
        else if (totalScore > targetNumber) {
            loser();
        };
    })

    $("#blue").on("click", function () {
        $("#your-score").text(totalScore);
        totalScore = totalScore + blue;
        if (totalScore === targetNumber) {
            winner();
        }
        else if (totalScore > targetNumber) {
            loser();
        };
    })

    $("#green").on("click", function () {
        $("#your-score").text(totalScore);
        totalScore = totalScore + green;
        if (totalScore === targetNumber) {
            winner();
        }
        else if (totalScore > targetNumber) {
            loser();
        };
    })

    $("#red").on("click", function () {
        totalScore = totalScore + red;
        $("#your-score").text(totalScore);
        if (totalScore === targetNumber) {
            winner();
        } else if (totalScore > targetNumber) {
            loser();
        };
    })
})
