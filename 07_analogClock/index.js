setInterval(() => {
    const d = new Date();
    const htime = d.getHours()
    const mtime = d.getMinutes()
    const stime = d.getSeconds();

    let hrotation = (30 * htime) + mtime/2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

}, 1000)
//set interval will repeat the things after every set time.

//initially yeh apne center ke around rotate krega, toh transform origin ko bottom krna padega.