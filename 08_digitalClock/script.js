const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 100);
});

const showTime = () => {
    //let ke jagah const krenge use toh har sec update nhi hoga.
    let date = new Date(); //yeh current date laake dega
    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();
    // let mili = date.getMilliseconds();

    hr = hr< 10 ? `0${hr}` : hr; //single digit time mei saamne 0 add hoga
    min = min< 10 ? `0${min}` : min;
    secs = secs< 10 ? `0${secs}` : secs;

    // console.log("hours " + hr + "mins " + min + "secs " + secs + " mili " + mili)
    time.innerHTML = `${hr} : ${min} : ${secs}`;

    timeformat.innerHTML = hr > 12 ? "PM" : "AM"
}
