
$(document).ready(function() {

// Pre-load sound effects 	
var audio0 = new Audio('https://soundbible.com/mp3/TomCat-Mr_Smith-2055290520.mp3');
var audio1 = new Audio('https://soundbible.com/mp3/Sheep Bleating-SoundBible.com-1373580685.mp3');
var audio2 = new Audio('https://soundbible.com/mp3/Turkey Gobble-SoundBible.com-312252853.mp3');
var audio3 = new Audio('https://soundbible.com/mp3/Dinosaur Roar-SoundBible.com-605392672.mp3');



// Array of sounds
var soundArray = [audio0, audio1, audio2, audio3];


// Click Listener for burger button
$('.burgerAvailable').on("click", function(){

// Generate a random number (from 0 to length of array)
var i = Math.floor(Math.random()*soundArray.length);

// Play the random sound
soundArray[i].play();

});


});
