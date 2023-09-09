let html = document.getElementsByTagName('html');
console.log(html);
let currentDayOfTheWeek = document.querySelector('.day');
let currentUTCTime = document.querySelector('.time');

let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

let hour, minute, second, displayTime;
hour = date.getUTCHours();
minute = date.getUTCMinutes();
second = date.getUTCSeconds();

// UTC Time
// making seconds count in real time???
function showTime(){
let am_pm = "AM";
if (hour >=12){
    am_pm = "PM";
}
        else if(hour==0){
            am_pm = "AM";
        }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    displayTime = `${hour}:${minute}:${second} ${am_pm}`;

    currentUTCTime.textContent = displayTime;
}

document.body.onload = function(){
    currentDayOfTheWeek.textContent = `${days[day]}, ${date.getDate()} ${months[month]} ${year}`;
    showTime();
};