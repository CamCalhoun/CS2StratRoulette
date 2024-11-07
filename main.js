const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1000,
		height: 750,
		minWidth: 1000,
		minHeight: 750,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: false,
			contextIsolation: true,
		}
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('load-strats', () => {
	try {
		const data = fs.readFileSync(path.join(__dirname, 'strats.json'), 'utf8')
		return JSON.parse(data)
	} catch (error) {
		console.error('Error reading strats.json', error)
		return {}
	}
})
