window.onload = cargaPagina;

function cargaPagina(){
    console.log("Comienzo");

    document.getElementById("play").addEventListener("click", pulsaPlay); 
    document.getElementById("pause").addEventListener("click", pulsaPause); 
    document.getElementById("mute").addEventListener("click", pulsaMute); 

}


function pulsaPlay(){
    console.log("Play");
    var audioOpcionPlay= document.getElementById("audio");

    audioOpcionPlay.play();
}

function pulsaPause(){
    console.log("Pause");
    document.getElementById("audio").pause();
}

function pulsaMute(){

    var pulsado= false;
    var audioOpcionMute= document.getElementById("audio");
    console.log("Mute");

    if(pulsado!==false){
        pulsado=true;
        audioOpcionMute.volume= 0;
    }else{
        audioOpcionMute;

    }
    
}