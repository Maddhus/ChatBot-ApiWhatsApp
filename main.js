const {app, BrowserWindow, ipcMain,remote} = require('electron')
let mainWindow 

app.on('ready', function(){

      mainWindow = new BrowserWindow();
      
      ipcMain.on("para",(event, artg)=>{
            if(arg.status){
                  mainWindow.hide();
            }
      });
      var telefone = "5531987951025";
      var mensagem = "Olá,"+nome+"seja bem-vinda!";
      
      mainWindow.loadURL("https://web.whatsapp.com/send?phone="+telefone+"&text="+mensagem);
      mainWindow.webContents.executeJavaScript('var {ipcMain,remote, ipcRenderer} = require("electron"); var enviado = false; function tempo(){ var btsend = document.getElementsByClassName("_4sWnG")[0]; var inputSend = document.getElementsByClassName("_13NKt")[0]; if(typeof inputSend !== "underfind" && inputSend.textContent && !enviado){ btsend.click(); enviado = true; }else if(enviado){ /*cancelar*/ ipcRenderer.send("para", {status: true}); enviado = false; } } setInterval(tempo,3000);');


});