window.onload = cargaPagina;

function cargaPagina(){
    console.log("Comienzo");

    document.getElementById("play").addEventListener("click", pulsaPlay); 
    document.getElementById("retroceder").addEventListener("click", pulsaRetroceder); 
    document.getElementById("adelantar").addEventListener("click", pulsaAvanzar); 
    document.getElementById("pause").addEventListener("click", pulsaPause); 
    document.getElementById("repetir").addEventListener("click", pulsaRepetir); 
}


function pulsaPlay(){
    console.log("Play");
    var videoOpcionPlay= document.getElementById("video");

    videoOpcionPlay.play();
}

function pulsaPause(){
    console.log("Pause");
    document.getElementById("video").pause();
}

function pulsaRetroceder(){

   // Get the video element with id="myVideo"
    var vid = document.getElementById("video");

    vid.currentTime-=5;
    
    
}

function pulsaAvanzar(){

    console.log("pulsa Avanzar");
    //var pulsado= false;
    var vid = document.getElementById("video");
    vid.currentTime+=5;
  
}

function pulsaRepetir(){   
    console.log("pulsa Repetir");
 
    var vid = document.getElementById("video");
    vid.currentTime=0;
}

