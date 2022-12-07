let lyrics;
let sound;
let img;

function preload() {
  lyrics = loadStrings('Special.txt');
  sound = loadSound('Special.mp3');
  img = loadImage('backgroundImage.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
  lyricsWordFreq();

  const playButton = createButton('sTArT !! ;u;');
  playButton.position(width / 20, height / 20);
  playButton.class('play-button');
  playButton.mousePressed(playSound);

  // sentences
  const sentences = createP('6:00pm came around and Olivia was a minute late. She was very unpunctual that time. Usually, she was the most punctual.');
  sentences.position(width / 2, height / 6);
  sentences.class('sentence');

  // circular mole arranger
  const moleInput = createInput();
  moleInput.position(width / 10, (2 * height) / 3);
  moleInput.class('input');

  const quantityPrompt = createP('How many bodily moles do you have?');
  quantityPrompt.position(moleInput.x, moleInput.y - 50);

  const userMessage = createP('');
  userMessage.position((3 * width) / 4, height / 2);
  userMessage.id('user-message');

  const displayMoleArrangements = createButton('Receive a tip regarding your moles!');
  displayMoleArrangements.position(moleInput.x, moleInput.y + 50);
  displayMoleArrangements.style('background-color', 'rgba(0,0,0,0.3)');

  displayMoleArrangements.mousePressed(() => {
    const moleInt = parseInt(moleInput.value(), 10);
    if (isNaN(moleInt) || moleInt < 0) {
      const err = new Error('Please give Mx. Placenta a non-negative whole number quantity of moles. You do not have to partake in toenail ingestion as a result of this infraction.');
      userMessage.html(err);
    } else if (moleInt === 0) {
      userMessage.html('You sure aren\'t looking too bready.');
    } else {
      userMessage.html(`You can have your moles removed and arrange them in a circle in ${factorial(moleInt - 1)} ways! However, you may sustain injuries in doing so. Always check with a dermatologist in the event that your moles cause you distress.`);
    }
  });

  function playSound() {
    if (sound.isPlaying() === true) {
      sound.stop();
      playButton.html('sTArT !! ;u;');
    } else {
      sound.play();
      playButton.html('Turn it the fuck off god dammit!');
    }
  }
}

// draw some rectangles
function draw() {
  fill(232, 93, 0, 10);
  stroke(0);
  strokeWeight(0.1);
  rect(mouseX, mouseY, 2, 50);
}

// helpers
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

function sortNumber(x, y) {
  return x - y;
}

function windowResized() {
  background(img);
}

function displayWord(word, wordCollection) {
  const from = color(210, 255, 74);
  const to = color(132, 0, 255);
  const lyricsColor = lerpColor(from, to, 1 / wordCollection[word]);
  fill(lyricsColor);
  textSize(3 * wordCollection[word]);
  textFont('Monaco');
  text(word, random(width), random(height));
}

function displayHiddenWordFrequencyValues(wordCollection) {
  // sort and display word frequency amounts invisibly
  const wordValues = Object.values(wordCollection);
  const sortedVals = wordValues.sort(sortNumber);
  const reversedVals = sortedVals.reverse();
  const hiddenFreqs = createP(reversedVals);
  hiddenFreqs.position(width / 2, height / 2);
  hiddenFreqs.class('invisible');
}

// get and display word frequency
function lyricsWordFreq() {
  // get words and their frequencies
  const arrStr = lyrics.toString();
  const cleanStr = arrStr.replace(/,+|\s{2,}/g, ' ');
  const strArr = cleanStr.split(' ');
  const wordCollection = {};
  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i].toLowerCase();
    if (wordCollection[word] === undefined) {
      wordCollection[word] = 1;
    } else {
      wordCollection[word] += 1;
    }
    // display the words with frequency matched to size
    displayWord(word, wordCollection);
  }
  displayHiddenWordFrequencyValues(wordCollection);
}
