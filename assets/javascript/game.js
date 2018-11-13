// Initialize global variables
//declare variable for p-Sasuke, p-Naruto, wins, and loses
var pSasuke;
var pNaruto = 0;
var wins = 0;
var losses = 0;

//onclick listener
$(".elements").click(function() {

    //adds value to the crystal elements
    var elementValue = $(this).val();

    //adds up powers for Naruto for every crystal element clicked on the click function
    pNaruto = parseInt(elementValue) + pNaruto;

    //adding Naruto power text to HTML
    $("#p-naruto").text(pNaruto);

    //check Win/Lose
    if (pNaruto > pSasuke) {
        alert("sorry you lost");
        console.log("you lost");
        losses++;
        $("#losses").text(losses);
        var image = $(".sasuke");
        image.fadeOut( 500, function () {
            image.attr({src: 'assets/images/sasuke2.jpg', height: 320, padding: 10});
            image.fadeIn(1000);
        });
        image.fadeIn( 4000 , function() {
            image.attr('src', 'assets/images/naruto.jpg');
            image.fadeIn('fast');
        });
        
        reset();
    
        
    } else if (pNaruto === pSasuke) {
        alert("you won!");
        console.log("you won");
        wins++;
        $("#wins").text(wins);
        
        reset();
    }
});

//set pSasuke to a number between 19-120
function randomSasuke() {
    // Math.floor(Math.random() * (max - min + 1)) + min;
        pSasuke = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#p-sasuke").text(pSasuke);
        console.log(pSasuke);
}

//generate random number to the crystal elements
function elementPower() {
    $(".elements").each(function(){
        elementValue = Math.floor(Math.random() * 12 + 1);
        $(this).val(elementValue);
    }); 
}

//specify a function to start the game
function reset() {
    
    //generate power for Sasuke
    randomSasuke();

    //generate random number for crystal elements
    elementPower();

    pNaruto = 0;

    $("#p-naruto").text(pNaruto);
}


//start game
reset();
