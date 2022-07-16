// Playlist array
var files = [
  "files/sounds/bleep.mp3",
  "files/sounds/ding.mp3",
  "files/sounds/suspend.mp3"
];

// For the pause functionality
var resume = false;

// Current index of the files array
var index;

// Get the audio element
var music_player = document.querySelector("#music_list audio");

// Store all the random numbers generated to prevent duplication
var randomSequence = [];

// To generate random number between 0-2
function randomNumber() {
  var ran = Math.floor(Math.random() * 3);
  while (ran === randomSequence[randomSequence.length - 1]) {
    ran = Math.floor(Math.random() * 3);
  }
  randomSequence.push(ran);
  return ran;
}

// function for moving to next audio file
function next() {
  // Resume the previously paused audia
  if (resume) {
    music_player.play();
    resume = false;
  } else {
    // Change the audio element source to a new random audio file
    index = randomNumber();
    music_player.src = files[index];
    resume = false;
  }
}

// Start the player
function play() {
  next();
  // Listen for the music ended event, to play the next audio file
  music_player.addEventListener('ended', next, false)
}

// To pause the audio playback
function pause() {
  resume = true;
  document.getElementById("audio").pause();
}

////////////////////////////////////////////////////////////////////////

// Detecting Button Presses
document.getElementById('play').addEventListener('click', function() {
  this.classList.add("hide");
  document.getElementById("stop").classList.remove("hide");
  document.querySelector(".heading").innerHTML = "Tap to stop the loop";
  play();
}, false);
//
document.getElementById('stop').addEventListener('click', function() {
  this.classList.add("hide");
  document.getElementById("play").classList.remove("hide");
  document.querySelector(".heading").innerHTML = "Tap to start the loop";
  pause();
}, false);
