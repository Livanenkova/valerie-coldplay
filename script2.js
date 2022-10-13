// import {array} from './coldpay_songs.js'
import {songs} from './coldplaySongs2.js'
console.log(songs)
console.log(songs.length)

const track = []
const trackLetter = []

const userStatistics = {
  wins:0,
  lose:0,
  winsSong:[],
  loseSong:[],
}

const createRandomNumber = (num) => Math.ceil(Math.random() * num);

function createElement(tag, className) {
  const tagElement = document.createElement(tag);
  if (className){
    tagElement.classList.add(className);
  }
  return tagElement;
};

let wordContainer;

const numberTrack =  createRandomNumber(songs.length);
let trackOnlyLetters;

const userInput = createElement('input',`user-letter`);
const sendAnswerButton = createElement('button',`send-answer`);
const startOverButton = createElement('button',`start-over`);
const showHint = createElement('button',`show-hint`);


function deleteWhiteSpace() {
  trackOnlyLetters = trackLetter[0].split(' ').join('');
}

const container = document.querySelector('.container');


function showArray() {
  const wordContainer = createElement('div',`word-container`);
  container.appendChild(wordContainer);
  track.push(songs[numberTrack].song.split(''));
  console.log(songs[numberTrack].song)

  trackLetter.push(songs[numberTrack].song.toLowerCase());
  deleteWhiteSpace()
  for(let i = 0; i < trackLetter[0].length; i++) {
    const letter = createElement('div',`input-letter`);
    letter.classList.add(`input-letter${i}`)
    wordContainer.appendChild(letter);
    if(track[0][i] === '/') {
      letter.innerText = '/';
    } else if (track[0][i] === '’'){
      letter.innerText = '’';
    }
    else if (track[0][i] === '.'){
      letter.innerText = '.';
    }
    else if (track[0][i] === '!'){
      letter.innerText = '!';
    }
    else if (track[0][i] === '&'){
      letter.innerText = '&';
    }
    else if (track[0][i] === ' '){
      letter.innerText = '_';
    }
  }
  sendAnswerButton.innerHTML = 'check the answer',
  startOverButton.innerHTML = 'reload game',
  showHint.innerHTML = 'show hint',
  container.appendChild(userInput);
  container.appendChild(showHint)
  container.appendChild(sendAnswerButton);
  container.appendChild(startOverButton);

  const hint = createElement('div',`hint`);
  container.appendChild(hint);

  const result = createElement('div',`result`);
  container.appendChild(result);
  
  const log = createElement('div',`log`);
  container.appendChild(log);
  log.innerHTML =`количество символов ${track[0].length} количество букв ${trackOnlyLetters.length}`;

  showHint.addEventListener('click',function(){
    console.log(songs[numberTrack].album)
    hint.innerHTML =`альбом ${songs[numberTrack].album}`;
  });

  sendAnswerButton.addEventListener('click',function(){
    userAnswer.push(userInput.value.toLowerCase())
    result.innerHTML = ''
    if(userAnswer[0] === '') {
      result.innerHTML ='вы ничего не ввели - введите ответ';
      
    }  else if(trackLetter[0] === userAnswer[0]) {
      result.innerHTML =`Правильно! Ты молодец - песня ${trackLetter[0]}`
      userStatistics.wins = userStatistics.wins +1;
    } else {
      userInput.value = ''
      result.innerHTML =`Ты не угадал - правильный ответ ${trackLetter[0]} - попробуй еще раз`
    }
  });

  startOverButton.addEventListener('click',function(){
    location.reload()
  });
}
const userAnswer = []

showArray()