let currentDayOfTheWeek = document.querySelector('.day');
let currentUTCTime = document.querySelector('.time');

let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let calendar = `${days[day]}, ${date.getDate()} ${months[month]} ${year}`;

// UTC Time
let nowTime = date.getTime();

setInterval(an, 1000);
function an(){
    currentDayOfTheWeek.textContent = calendar;
    currentUTCTime.textContent = nowTime;
}