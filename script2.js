// import {array} from './coldpay_songs.js'
import { songs } from "./coldplaySongs2.js";
const track = [];
const trackLetter = [];
const userStatistics = {
  wins: 0,
  lose: 0,
  winsSong: [],
  loseSong: [],
};

const createRandomNumber = (num) => Math.ceil(Math.random() * num);

function createElement(tag, className) {
  const tagElement = document.createElement(tag);
  if (className) {
    tagElement.classList.add(className);
  }
  return tagElement;
}

let wordContainer;

const numberTrack = createRandomNumber(songs.length);
let trackOnlyLetters;

const userInput = createElement("input", `user-letter`);
const sendAnswerButton = createElement("button", `send-answer`);
const startOverButton = createElement("button", `start-over`);
const showHint = createElement("button", `show-hint`);
const startTimer = createElement("button", `timer-btn`);

function deleteWhiteSpace() {
  trackOnlyLetters = trackLetter[0].split(" ").join("");
}

const container = document.querySelector(".container");

function start() {
  const wordContainer = createElement("div", `word-container`);
  container.appendChild(wordContainer);
  track.push(songs[numberTrack].song.split(""));

  trackLetter.push(songs[numberTrack].song.toLowerCase());
  deleteWhiteSpace();
  for (let i = 0; i < trackLetter[0].length; i++) {
    const letter = createElement("div", `input-letter`);
    letter.classList.add(`input-letter${i}`);
    wordContainer.appendChild(letter);
    if (track[0][i] === "/") {
      letter.innerText = "/";
    } else if (track[0][i] === "’") {
      letter.innerText = "’";
    } else if (track[0][i] === ".") {
      letter.innerText = ".";
    } else if (track[0][i] === "!") {
      letter.innerText = "!";
    } else if (track[0][i] === "&") {
      letter.innerText = "&";
    } else if (track[0][i] === " ") {
      letter.innerText = "_";
    }
  }
  (sendAnswerButton.innerHTML = "check the answer"),
    (startOverButton.innerHTML = "reload game"),
    (showHint.innerHTML = "show hint"),
    container.appendChild(userInput);
  container.appendChild(showHint);
  container.appendChild(sendAnswerButton);
  container.appendChild(startOverButton);
  startTimer.innerHTML = ("Запустить таймер"),
  container.appendChild(startTimer);

  const hint = createElement("div", `hint`);
  container.appendChild(hint);

  const result = createElement("div", `result`);
  container.appendChild(result);

  const log = createElement("div", `log`);
  container.appendChild(log);
  log.innerHTML = `количество символов: ${track[0].length} количество букв: ${trackOnlyLetters.length}`;

  showHint.addEventListener("click", function () {
    hint.innerHTML = `альбом ${songs[numberTrack].album}`;
  });

  sendAnswerButton.addEventListener("click", function () {
    userAnswer.push(userInput.value.toLowerCase());
    result.innerHTML = "";
    if (userAnswer[0] === "") {
      result.innerHTML = "вы ничего не ввели - введите ответ";
    } else if (trackLetter[0] === userAnswer[0]) {
      result.innerHTML = `Правильно! Ты молодец - песня ${trackLetter[0]}`;
      userStatistics.wins = userStatistics.wins + 1;

      const showMeme = createElement("button", `show-meme`);
      container.appendChild(showMeme);
      showMeme.innerHTML = `показать мем`;
      const imgWrap = createElement("div", `img-wrap`);
      container.appendChild(imgWrap);
      const imgEl = createElement("img", `img-el`);
      imgWrap.appendChild(imgEl);

      showMeme.addEventListener("click", function () {
        const memeLength = 22;
        const numberMeme = createRandomNumber(memeLength);
        imgEl.src = `./img/${numberMeme}.jpg`;
      });
    } else {
      userInput.value = "";
      result.innerHTML = `Ты не угадал - правильный ответ ${trackLetter[0]} - попробуй еще раз`;
    }
  });

  startOverButton.addEventListener("click", function () {
    location.reload();
  });

  const timerWrap = createElement("div", `timer`);
  const timerItems = createElement("div", `timer__items`);
  const timerDays = createElement("div", `timer__days`);
  const timerHours = createElement("div", `timer__hours`);
  const timerMinutes = createElement("div", `timer__minutes`);
  const timerSeconds = createElement("div", `timer__seconds`);
  const timerText = createElement("div", `timer__text`);

  timerDays.classList.add('timer__item');
  timerHours.classList.add('timer__item');
  timerMinutes.classList.add('timer__item');
  timerSeconds.classList.add('timer__item');

  startTimer.addEventListener("click", function () {
    console.log("Запустить таймер");
    container.appendChild(timerText);
    container.appendChild(timerWrap);
    timerWrap.appendChild(timerItems);
    timerItems.appendChild(timerDays);
    timerItems.appendChild(timerHours);
    timerItems.appendChild(timerMinutes);
    timerItems.appendChild(timerSeconds);

    timerText.textContent = "Арина вернется через:"

    const deadline = new Date(2022, 10, 21, 11);
    console.log(deadline)
    let timerId = null;
    function declensionNum(num, words) {
      return words[
        num % 100 > 4 && num % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
      ];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      timerDays.textContent = days < 10 ? "0" + days : days;
      timerHours.textContent = hours < 10 ? "0" + hours : hours;
      timerMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
      timerSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
      timerDays.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
      timerHours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
      timerMinutes.dataset.title = declensionNum(minutes, [
        "минута",
        "минуты",
        "минут",
      ]);
      timerSeconds.dataset.title = declensionNum(seconds, [
        "секунда",
        "секунды",
        "секунд",
      ]);
    }
    // получаем элементы, содержащие компоненты даты
    // const $days = document.querySelector('.timer__days');
    // const $hours = document.querySelector('.timer__hours');
    // const $minutes = document.querySelector('.timer__minutes');
    // const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
}
const userAnswer = [];

start();
