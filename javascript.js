
let btn = document.querySelector("button");
let section = document.querySelector(".stats");
let numbers = document.querySelectorAll(".num");
let started = false;
let skills = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".the-progress span")
let sp = document.querySelectorAll(".sp")




window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
    if (!started) {
        numbers.forEach((num) => startCount(num));
    }
    started = true;
    }
    if (window.scrollY >= skills.offsetTop)
    {
        progress.forEach((span) => {
            span.style.width = span.dataset.width

            
        })
        sp.forEach((s)=> {
            s.style.opacity = "1";
        })
    }
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else
    {
        btn.style.display = "none";
    }

};
btn.onclick = function () {
    window.scrollTo ({
        left : 0,
        top: 0,
        behavior: "smooth",
    });
};


function startCount (el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(counter);
        }
        
        
    }, 2000 / goal)

}

// the end of the year date to countdown
// 1000 milliseconds = 1 sec

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    // get date now
    let dateNow = new Date().getTime();
    // find the date difference between now and countdown date
    let dateDiff = countDownDate - dateNow;

    // get time unites
    let days = Math.floor(dateDiff / (1000*60*60*24) );
    let hours = Math.floor(dateDiff % (1000* 60 * 60 * 24) / (1000 * 60 * 60) )
    let minutes = Math.floor(dateDiff % (1000* 60 * 60) / (1000 * 60))
    let seconds = Math.floor(dateDiff % (1000* 60) / 1000)
    
    
    document.querySelector(".days").innerHTML = days < 10  ? `0${days}`:days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`:hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`:seconds;

if (dateDiff < 0) {
    clearInterval(counter)
}

},1000)




