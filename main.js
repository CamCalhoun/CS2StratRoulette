const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1000,
		height: 750,
		minWidth: 1000,
		minHeight: 750,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	ipcMain.handle('ping', () => 'pong')
	createWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
