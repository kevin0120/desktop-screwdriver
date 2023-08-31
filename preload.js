/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
console.log('全局变量process：', process)
console.log('全局变量window：', window)
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})


const {contextBridge, ipcRenderer} = require('electron')

// contextBridge.exposeInMainWorld('electronAPI', {
//     setTitle: (title) => ipcRenderer.send('set-title', title),
//     openFile: () => ipcRenderer.invoke('dialog:openFile'),
//     handleCounter: (callback) => ipcRenderer.on('update-counter', callback)
// })

// 上下文隔离禁用的情况下使用预加载
window.electronAPI = {
    // setTitle: (title) => ipcRenderer.send('set-title', title),
    // openFile: () => ipcRenderer.invoke('dialog:openFile'),
    // handleCounter: (callback) => ipcRenderer.on('update-counter', callback),
    openWorkingDisk: () => ipcRenderer.send('openWorkingDisk'),
    setCurrentController: (ip) => ipcRenderer.send('setCurrentController', ip),
    getController: () => ipcRenderer.sendSync('getController'),


    addDeviceBackend: (device) => ipcRenderer.sendSync('addDeviceBackend', device),
    copyDeviceBackend: (device, copyId) => ipcRenderer.sendSync('copyDeviceBackend', device, copyId),
    delDeviceBackend: (deviceId) => ipcRenderer.sendSync('delDeviceBackend', deviceId),
    syncDevicesBackend: (devices) => ipcRenderer.sendSync('syncDevicesBackend', devices),
    getDevicesBackend: () => ipcRenderer.sendSync('getDevicesBackend'),
    editDeviceBackend: (device) => ipcRenderer.send('editDeviceBackend',device),
}