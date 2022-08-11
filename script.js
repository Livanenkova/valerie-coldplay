const array = ['42',
'a message',
'a rush of blood to the head',
'a warning sign',
'a whisper',
'amsterdam',
'atlas',
'brothers and sisters',
'brothers and sisters',
'cemeteries of london',
'charlie brown',
'chinese sleep chant',
'clocks',
'daylight',
'death and all his friends',
'don’t let it break your heart',
'don’t panic',
'easy to please',
'every teardrop is a waterfall',
'everything’s not lost',
'fix you',
'glass of water',
'god put a smile upon your face',
'green eyes',
'high speed',
'hurts like heaven',
'in my place',
'life in technicolor ii',
'lost!',
'lovers in japan',
'lovers in japan / reign of love',
'low',
'major minus',
'm.m.i.x.',
'no more keeping my feet on the ground',
'only superstition',
'parachutes',
'paradise',
'politik',
'princess of china',
'proof',
'prospekt’s march / poppyfields',
'rainy day',
'see you soon',
'shiver',
'sparks',
'speed of sound',
'square one',
'strawberry swing',
'swallowed in the sea',
'talk',
'the escapist',
'the ground',
'the hardest part',
'the scientist',
'til kingdom come',
'till kingdom come',
'trouble',
'twisted logic',
'ufo',
'up in flames',
'up with the birds',
'us against the world',
'Violet hill',
'Viva la vida',
'warning sign',
'we never change',
'what if',
'white shadows',
'x and y',
'x&y',
'yellow',
'yes'];

const track = []
const trackLetter = []

const createRandomNumber = (num) => Math.ceil(Math.random() * num);

function createElement(tag, className) {
  const tagElement = document.createElement(tag);
  if (className){
    tagElement.classList.add(className);
  }
  return tagElement;
};

const wordContainer = document.querySelector('.word-container');

const numberTrack =  createRandomNumber(array.length);
let trackOnlyLetters;

function deleteWhiteSpace() {
  trackOnlyLetters = trackLetter[0].split(' ').join('');
  console.log(trackOnlyLetters)
}

function showArray() {
  track.push(array[numberTrack].split(''));
  trackLetter.push(array[numberTrack]);
  deleteWhiteSpace()
  console.log(track)
  console.log(trackLetter)
  for(let i = 0; i < trackLetter[0].length; i++) {
    const input = createElement('input',`input-letter`);
    input.classList.add(`input-letter${i}`)
    input.style.width =  '20px';
    input.style.height =  '20px';
    input.style.border = '1px solid black';
    input.maxLength = '1';
    wordContainer.appendChild(input);
    console.log(track[0][i])
    if(track[0][i] == '/') {
      input.innerText = '/';
      input
      console.log(track[0][i])
    } else {
      input.innerText = track[0][i];

    }

  }
}
const sendAnswerBtn = document.querySelector('.send-answer');
const userAnswer = []

sendAnswerBtn.addEventListener('click',function(){
  console.log('click')
  // const inputLetter = document.querySelector('.inputLetter');
  for ( let i = 0; i < trackLetter[0].length; i++) {
    const input = document.querySelector(`.input-letter${i}`);
    userAnswer.push(input.value )
    console.log(userAnswer)
    }
});

showArray()