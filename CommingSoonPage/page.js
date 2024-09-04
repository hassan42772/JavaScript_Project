let day = document.getElementById('day');
let hour = document.getElementById('hours');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let date = new Date('2025-1-30 00:00:00').getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = date - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    if (distance < 0) {
        clearInterval(x);
        day.innerHTML = 00;
        hour.innerHTML = 00;
        minute.innerHTML = 00;
        second.innerHTML = 00;
    }
}, 1000);