/**
 * index.js
 * 
 * @author yuki
 */

'use strict';

const electron = require('electron');



const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    // 幅、高さ、フラグ、HTMLファイル名などは適宜変更
    mainWindow = new BrowserWindow({ width: 1024, height: 768, resizable: false });
    mainWindow.loadURL('file://' + __dirname + '/app/view/title.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

