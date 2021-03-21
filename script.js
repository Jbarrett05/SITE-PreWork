/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback

//Global Variables
//var pattern = [2,2,4,3,2,1,2,4];
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var guessRemaining;

//Generates random pattern for array used in game
function randPatternGen() {
  var randomNum;
  pattern = [];
  var min = Math.ceil(1);
  var max = Math.floor(6);
  for (let i = 0; i < 10; i++) {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    pattern.push(randomNum);
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  guessRemaining = 3;
  clueHoldTime = 1000;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randPatternGen();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 526.6,
  6: 592
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over...You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over...You won!");
}

function numOfGuessLeft() {
  alert(
    "Incorrect Pattern Guess! Number of guesses remaining: " + guessRemaining
  );
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //guess was correct
    if (guessCounter == progress) {
      //if they get to end of pattern sequence, win game
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        //end of sequence isn't reached so add next clue
        progress++;
        clueHoldTime -= 75;
        playClueSequence();
      }
    } else {
      //check next guess
      guessCounter++;
    }
  } else {
    //increase number of incorrect guesses, prompted player
    guessRemaining--;
    if (guessRemaining > 0) {
      numOfGuessLeft();
      playClueSequence();
    } else {
      //incorrect max number of guesses is reached, so game lost
      loseGame();
    }
  }
}
