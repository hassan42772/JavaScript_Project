let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let weekday = document.querySelector(".weekday");
let time = document.querySelector(".time");


let date = new Date();
weekday.innerHTML= date.toLocaleDateString("en-US" , {  weekday: "long"});
day.innerHTML = date.toLocaleDateString("en-US" , {  day: "numeric"});
month.innerHTML = date.toLocaleDateString("en-US" , {  month: "long"});
year.innerHTML = date.toLocaleDateString("en-US" , {  year: "numeric"});
setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString("en-US" , {  hour: "numeric", minute: "numeric", second: "numeric"});
}, 1000);


