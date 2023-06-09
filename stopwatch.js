let timerDisplay = document.querySelector('.timerDisplay');
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 00;
let secs = 00;
let mins = 00;
let hour = 00;

let timerId = null;

startbtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});
stopbtn.addEventListener('click', function(){
    clearInterval(timerId); 
});
resetbtn .addEventListener('click', function(){
    clearInterval(timerId); 
    timerDisplay.innerHTML = '00 : 00 : 00 : 00';
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
    
        if(secs == 60){
            secs = 0;
            mins++;
            if(mins == 60){
                mins = 0;
                hour++;
        }
    }
    }
    


    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hourString = hour < 10 ? `0${hour}` : hour;


    timerDisplay.innerHTML=`${hourString} :${minsString} : ${secsString} : ${msecString}`; 

    // let msecstring;
    // if(msec < 10){
    //     msecString = '0${msec}';
    // }
    // else{
    //     msecString = msec;
    // }
}
