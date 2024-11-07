const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
	loadStrats: () => ipcRenderer.invoke('load-strats')
})
