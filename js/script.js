

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const bossFight = "20 Oct 2021";


function countdown(){

  const newBossFightDate = new Date (bossFight);
  const currentBossFightDate = new Date();

  const totalSeconds = (newBossFightDate - currentBossFightDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;


  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

function formatTime(time){

  return time < 10 ? `0${time}` : time;
}



  console.log(days, hours, minutes, seconds);

}


countdown();

setInterval(countdown, 1000);
