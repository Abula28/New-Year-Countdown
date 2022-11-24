let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let timeCard = document.querySelector('.time-cards')
let minus = document.querySelector('.minus')

let currentYear = new Date().getFullYear()

let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00 `)


function countDown(){
    let currentTime = new Date()
    let diff = newYearTime - currentTime

    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff /1000 / 60/ 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if(d == 0 && h == 0 && m == 0 && s == 0){
        timeCard.style.display = "none"
        minus.style.display = "none"
    }
}


setInterval(countDown, 1000)