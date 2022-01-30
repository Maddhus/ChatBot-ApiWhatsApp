
var {ipcMain,remote, ipcRenderer} = require("electron");
var enviado = false; 

function tempo(){

    var btsend = document.getElementsByClassName("_4sWnG")[0];
    
    var inputSend = document.getElementsByClassName("_13NKt")[0];
    
    if(typeof inputSend !== "underfind" && inputSend.textContent && !enviado){
        btsend.click();
        enviado = true; 
    }else if(enviado){
        /*cancelar*/
        ipcRenderer.send("para", {status: true});
        enviado = false; 
    }
}

setInterval(tempo,3000);