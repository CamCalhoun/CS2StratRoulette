const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('strategies', {
	loadStrats: () => ipcRenderer.invoke('load-strats')
})
