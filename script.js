let pbtm=document.getElementById("pbtm");
function makebubble(){
    var clutter = "";
for(var i = 1; i<=140; i++){
   var rn = Math.floor(Math.random()*10)
   clutter += ` <div class="bubble">${rn}</div> `;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
var score = 0;
var hitrn = 0;
let high = localStorage.getItem("HScore") ? parseInt(localStorage.getItem("HScore")) : 0;
document.querySelector("#hscore").textContent = high;


function  increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getnewhit(){
  hitrn =  Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn;
}
function highestScore(){
     if (high<score){
        high=score;
        localStorage.setItem("HScore",high);
        localStorage.getItem("HScore");
     }
     document.querySelector("#hscore").textContent = high;
    
}

function runtimer(){
  var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);  
            highestScore();         
            document.querySelector("#pbtm").innerHTML = `
            <h1>Game Over</h1></br>
            <h3>Your Score is ${score}</h3></br>
            <button id="restart">Restart Game</button>
            `;    
            document.querySelector("#restart").addEventListener("click",RestartGame)       
        }

    },1000)
}
document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    // alert("it's running");
    var clickednum = (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getnewhit();
        highestScore()
    }
})



function RestartGame(){
    timer=60;
    score=0;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timerval").textContent = timer;
    runtimer();
    makebubble();
    getnewhit();
    highestScore()


}

runtimer();
makebubble();
getnewhit();
// increaseScore();