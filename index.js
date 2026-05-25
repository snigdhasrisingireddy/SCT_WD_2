const dislay=document.getElementById("display")
let starttime=0;
let isstarted=false;
let time=null;
let elapsedtime=0;
function start(){
    if(!isstarted){
        starttime=Date.now() - elapsedtime;
        time=setInterval(update,10);
        isstarted=true;
    }
}
function pause(){
     if(isstarted){
        clearInterval(time);
        elapsedtime=Date.now()-starttime;
        isstarted=false;
     }
}
function reset(){
    clearInterval(time);
    starttime=0;
    elapsedtime=0;
    isstarted=false;
    dislay.textContent="00:00:00:00"
    document.getElementById("laps").innerHTML = "";
}
function update(){
    const currenttime=Date.now();
    elapsedtime=currenttime-starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60 );
    let seconds = Math.floor( elapsedtime / 1000 % 60);
    let milliseconds = Math.floor(elapsedtime % 1000 / 10);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    display.textContent =`${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function lap() {
  const lapTime = document.getElementById("display").textContent;
  const li = document.createElement("li");
  li.textContent = lapTime;
  document.getElementById("laps").appendChild(li);
}
