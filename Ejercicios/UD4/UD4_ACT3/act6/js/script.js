window.onload = cargaPagina;

function cargaPagina(){
    console.log("Comienzo");

    document.getElementById("play").addEventListener("click", pulsaPlay); 
    document.getElementById("pause").addEventListener("click", pulsaPause); 
    document.getElementById("mute").addEventListener("click", pulsaMute); 
    document.getElementById("up").addEventListener("click", pulsaVolumeUp); 
    document.getElementById("down").addEventListener("click", pulsaVolumeDown); 
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

    if(pulsado===false){
        pulsado=true;
        audioOpcionMute.volume=0;
    }else{
        audioOpcionMute;

    }
    
}

function pulsaVolumeUp(){

    console.log("Volume Up");
    var pulsado= false;
    var volumeUp=document.getElementById("audio");
    //console.log("Hemos subido 0.1 -> " + volumeUp.volume);

    if(pulsado===false){
        //console.log("Dentro de pulsado===false -> " + volumeUp.volume);
        if(volumeUp.volume>=0.9){
            console.log("Ya no se puede subir mas el volumen");
            volumeUp.volume = 1;
            //console.log("----------Intento de subir volumen a 1: " + volumeUp.volume);

        }else{
            volumeUp.volume = volumeUp.volume + 0.1;
        }
    }    
}

function pulsaVolumeDown(){

    
    console.log("Volume Down");
    var pulsado= false;
    var volumeDown=document.getElementById("audio");
    //console.log(volumeDown.volume);
    
    if(pulsado===false){
        
        //console.log("Dentro de pulsado===false -> " + volumeDown.volume);
        //console.log("Hemos bajado 0.1 -> " + volumeDown.volume);

        if(volumeDown.volume<=0.1){
            console.log("Ya no se puede bajar mas el volumen");
            volumeDown.volume = 0;
            console.log("----------Intento de bajar volumen a cero: " + volumeDown.volume);

        }else{
            volumeDown.volume = volumeDown.volume - 0.1;
        }

       /* if(volumeDown.volume<=0.2){           
            volumeDown.volume=0.2;
            console.log("volumeDown if" + volumeDown.volume);
        }else{
            //volumeDown.volume-=0.1; 
            console.log("volumeDown else" + volumeDown.volume);
            console.log("Aqui nunca deberiamos entrar si volumeDown<=0.2");
        }*/
       // return false;

    }/*else{
        volumeDown;
    }*/
}

