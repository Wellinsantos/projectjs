setInterval(showTime, 1000);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMINUTES();
    am_pm = 'AM';

    if (hours > 12){
        hour -= 12;
        am_pm ="PM";
    }
    if (hours == 0){
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? '0' + hour : hour;
    min = mim < 10 ? '0' + min : min;
    sec = sec <10 ? '0' + sec : sec;

    let currentTime = hour + ":" + min + ':' + sec + am_pm;
    
    document.getElementById('clock').innerHTML = currentTime;

}
showTime();