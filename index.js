const { app, BrowserWindow } = require('electron')

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 加载index.html文件
  win.loadURL('http://localhost:8080/#/index.html')
}

app.on('ready', createWindow)