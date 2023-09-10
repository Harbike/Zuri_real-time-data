let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

function updateTime(){
const currentUTCTime = document.querySelector('.time');

const now = new Date();
const formattedTime = now.getTime();
currentUTCTime.textContent = formattedTime;
updateDate();
}
setInterval(updateTime, 1000);
updateTime();

function updateDate(){
    const currentDayOfTheWeek = document.querySelector('.day');
    const now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();
    let calendar = `${days[day]}, ${now.getDate()} ${months[month]} ${year}`;
    currentDayOfTheWeek.textContent = calendar;
}