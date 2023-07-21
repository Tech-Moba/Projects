
setInterval(() => {

    let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');


// do this after doing the id="hh, mm, ss" in the html
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
// end

// do this after doing .dots::before in css
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');
// end

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";


// convert 24hr clock to 12hr clock should be done last
if (h > 12){
    h = h - 12;
}
// end

// adding zero before single digit number 
// should be done after converting 24hr to 12hr
h = (h < 10) ? "0" + h :h;
m = (m < 10) ? "0" + m :m;
s = (s < 10) ? "0" + s :s;


hours.innerHTML = h + "<br><span>Hours</span>";
minutes.innerHTML = m + "<br><span>Minutes</span>";
seconds.innerHTML = s + "<br><span>Seconds</span>";
ampm.innerHTML = am;

// do this after doing let hh, mm, ss in javascript
hh.style.strokeDashoffset = 440 - (440 * h) / 12;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;

// do this after typing hr_dot, min_dot, sec_dot in javascript
hr_dot.style.transform = `rotate(${h * 30}deg)`;
// 360 / 12 = 30
min_dot.style.transform = `rotate(${m * 6}deg)`;
// 360 / 60 = 6
sec_dot.style.transform = `rotate(${s * 6}deg)`;
// 360 / 60 = 6
// end
})
