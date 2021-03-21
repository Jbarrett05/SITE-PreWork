# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Jaheim Barrett

Time spent: 7 hours spent in total

Link to project: https://glitch.com/edit/#!/site-program-prework

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Random pattern is generated for each playthrough

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/DsFELzm.gif)
![](https://i.imgur.com/wssoKrl.gif)
![](https://i.imgur.com/3PxLATj.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   - Resource for changing the color
     https://www.w3schools.com/cssref/css_colors.asp
   - Resource for font changing
     https://www.w3.org/Style/Examples/007/fonts.en.html
   - Reserach on math random function in javascript for random pattern construct
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   - Research on how to empty an array
     https://www.tutorialspoint.com/in-javascript-how-to-empty-an-array

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- *One challenge that I encountered was with the random number generator for the pattern used in the game. For an additional feature, I wanted to create a different pattern with each instance of a new game rather than repeating a set sequence. Due to prior programming experience with Java and C++, I had an initial concept of how to create a random number generator for values of an array. However, because I didn’t have too much knowledge with web development, I was a bit lost as to how I could go about implementing the same method using javascript. To tackle this issue, I first tried to go step-by-step on how I would try to create such a function using Java. From there, I realized that within each language there is some function that helps to give a random integer. After a quick search online, I found that Javascript also has a similar function, one that allows me to set an inclusive minimum and maximum value to choose in between from. From there, I implemented a function to be called in the “start” function that was created for initializing the game so that the array was created from the start with the corresponding button-id to be used. This worked, however I ran into my next issue shortly after, as while it did generate a random pattern for the game, it used the same pattern for every playthrough unless you hit the reload button for the project. This meant that I needed to create a different array each time that the start button was hit so that a new sequence was used. After another quick search, I found a few methods about how to properly empty an array using a site that explained each use and their importance. From evaluating the code written, I chose to simply create a new empty array using the same variable (arrayPattern = []) as it was the most simplistic approach that was the easiest to implement without any further issues.*

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
- *One question that I do have about web development would be in regards to the extent that it can be used for creating different applications. Doing this assignment helped to introduce an example of how Javascript, HTML and CSS can all be used in conjunction with each other to create a simple game that tests light and sound memory. I had tons of fun doing this small project, to which after completion, made me wonder just how far I could have taken this assignment while still using the same programs.* 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
- *If I had a few more hours to work on this project, one thing I would definitely work a bit more on would have to be the styling for the game. While I was able to change the fonts and colors a bit to spice up the overall look, I would want to change things like the background and button colors to something more advanced than just simple color themes. For example, I would try to add something with a thin pattern decoration for the background so as to not distract the player from the lights and sounds of the game. Another thing that I would want to implement is a timer feature where it had a set time on display for each turn so that the player was notified on how long that had to give an answer before automatically losing a guess. I would also like to include audio files to then use for the game, such as two different short sound sequences playing after   the player either passed a level or if they had lost a turn from the limited amount of guesses to use. In addition to the audio, I would also add a different sound for each button pressed. Lastly, although I am not too sure if it would be possible, I would want to add a feature to the buttons where some sort of animation would happen with both the start and end of a game. For example, when the player hits the start button, each button would float in and appear right next to each other right one by one before the start of the first sequence. Then, right after the end of playthrough, the buttons would slowly fade out and disappear until the start was hit again.*

## License

    Copyright Jaheim Barrett

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
