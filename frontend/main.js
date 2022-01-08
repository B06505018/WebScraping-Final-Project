var isReady = true;
var isStart = false;
var isOver = false;

var gameTitle = document.querySelector(".game-title");
var description = document.querySelector(".description");
var choiceList = document.querySelector(".choice-list");
var choiceA = document.querySelector(".button-left");
var choiceB = document.querySelector(".button-right");
var startButton = document.querySelector(".start");

choiceA.addEventListener("click", handleChoice);
choiceB.addEventListener("click", handleChoice);
startButton.addEventListener("click", startGame);

window.onload = function(){
    setInterval("toggleSound()",100);
}

function toggleSound() {
       var music = document.getElementById("bgm");//獲取ID  
           
       if (music.paused) { //判讀是否播放  
           music.paused=false;
           music.play(); //沒有就播放 
       }    
}

function handleChoice(obj) {

}

function startGame(obj) {
    isReady = false;
    isStart = true;
    gameTitle.style.display = "none";
    startButton.style.display = "none";
    description.style.display = "block";
    choiceList.style.display = "block";
    choiceList.style.visibility = "hidden";
}