import { app, BrowserWindow as browserWindow } from 'electron';
import path from 'path';

let mainWindow: browserWindow;

function createWindow() {
  mainWindow = new browserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, 'public/index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null!;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if(mainWindow === null) {
        createWindow();
    }
})
