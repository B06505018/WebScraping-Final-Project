isReady = true;
isStart = false;
isOver = false;

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
