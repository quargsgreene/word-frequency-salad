let lyrics;
let sound, img;
let b = '#ffe9db';

function preload(){
  lyrics = loadStrings('Special.txt');
  sound = loadSound('Special.mp3');
  img=loadImage('bg1.jpg');
}

function lyricsWordFreq(){
  //get words and their frequencies
  let arrStr = lyrics.toString();
  let cleanStr = arrStr.replace(/,+|\s{2,}/g,' ');
  let strArr=cleanStr.split(' ');
  let output = {};
  for(let i=0;i<strArr.length;i++){
  let word = strArr[i].toLowerCase();
  if(output[word]===undefined){
    output[word]=1;
    }else{
      output[word]+=1;
      }
  //display the words with frequency matched to size

  let from_1 = color(210, 255, 74);
  let to_1 = color(132, 0, 255);
  let between_1 = lerpColor(from_1,to_1,1/output[word]);
  fill(between_1);
  textSize(3*output[word]);
  textFont('Monaco');
text(word,random(width),random(height));
  }

//sort and display word frequency amounts invisibly

   let sortNumber = function(x,y){
    return x-y;
  }
  for(let words in output){
      let sortedVals = Object.values(output).sort(sortNumber);
    let reversedVals = sortedVals.reverse();
  let hiddenFreqs = createP(reversedVals);
		hiddenFreqs.position(width/2,height/2);
 hiddenFreqs.style('opacity','0');

}

}

function setup() {  createCanvas(windowWidth,windowHeight);
  background (img);
  let wordsDisplay = lyricsWordFreq();
  let button_1 = createButton('sTArT !! ;u;');
	button_1.style('background-color','rgb(232, 93, 0)');
	button_1.style('border','outset 2px rgb(232, 93, 0)');
  button_1.position(width/20,height/20);
  button_1.mousePressed(playSound);
  function playSound(){
    if(sound.isPlaying()===true){
      sound.stop();
      button_1.html('sTArT !! ;u;');
    }else{
      sound.play();
      button_1.html('Turn it the fuck off god dammit!');
    }
  }

	//sentences
	let sentences = createP('6:00pm came around and Olivia was a minute late. She was very unpunctual that time. Usually, she was the most punctual.');
	sentences.position(width/2,height/6);
	sentences.style('color','#eeeeee');
	sentences.style('background-color','rgba(0,0,0,0.3)');
	sentences.style('font-family','Courier');
	sentences.style('border','outset white 2px');
	//circular mole arranger

	let moleInput = createInput();
	moleInput.position(width/10,2*height/3);
	moleInput.style('background-color','rgb(120, 255, 120)');
	moleInput.style('font-family','Monaco');
	moleInput.style('color','grey');

	let quantityPrompt = createP('How many bodily moles do you have?');
	quantityPrompt.position(moleInput.x,moleInput.y-50);
	quantityPrompt.style('font-family','Monaco');
	quantityPrompt.style('color','white');

	let user_message_3 = createP('');
  user_message_3.position(3*width/4, height/2);
  user_message_3.style('color', 'white');
  user_message_3.style('font-family', 'Monaco');

	let displayMoleArrangements = createButton('Receive a tip regarding your moles!');
	displayMoleArrangements.position(moleInput.x,moleInput.y+50);
	displayMoleArrangements.style('background-color', 'rgba(0,0,0,0.3)');
 displayMoleArrangements.style('color', 'white');
  displayMoleArrangements.style('font-family', 'Monaco');

	displayMoleArrangements.mousePressed(function circularMoleArrangements (){
		let moleInt = parseInt(moleInput.value());
		if(isNaN(moleInt) || moleInt<0){
			let err = new Error('Please give Mx. Placenta a non-negative whole number quantity of moles. You do not have to partake in toenail ingestion as a result of this infraction.');
			user_message_3.html(err);
		}

		if(moleInt===0){
			user_message_3.html('You sure aren\'t looking too bready.');
		}else{
			user_message_3.html("You can have your moles removed and arrange them in a circle in " + factorial(moleInt-1) + " ways! However, you may sustain injuries in doing so. Always check with a dermatologist in the event that your moles cause you distress.");
		}

		function factorial (x){
			if(x===0){
				return 1;
			}else{
				return x*factorial(x-1);
			}
		}

	});

}

function draw() {
  fill(232, 93, 0,10);
  stroke(0);
  strokeWeight(0.1);
  rect(mouseX,mouseY,2,50);

}


function windowResized (){
  background (img);
 let wordsDisplay = lyricsWordFreq();
}
