import { BrowserWindow } from 'electron'
import fs from 'fs'
import * as utils from './utils'

export function createWindow ({ dimensions } = { dimensions: { width: 1024, height: 768 } }) {
  return new BrowserWindow({
    x: 0,
    y: 0,
    width: dimensions.width,
    height: dimensions.height,

    show: false,
    transparent: false,
    skipTaskbar: true,
    frame: false,

    webPreferences: { nodeIntegration: false },
    backgroundThrottling: false,
    useContentSize: true,
    enableLargerThanScreen: true,
    directWrite: true,
  })
}

export function setWindowProps ({ url, width, height }, win) {
  return Promise((resolve, reject) => {
    win.loadURL(url)
    win.setSize(width, height)
    win.on('page-title-updated', resolve())
  })
}

export function saveScreenshot ({ url, filename }, win) {
  return Promise((resolve, reject) => {
    win.capturePage(image => {
      fs.writeFile(filename, image.toPNG(), err => {
        if (err) reject(err)
        console.log(`Saved screenshot from ${url} under ${filename}`)
        resolve('done')
      })
    })
  })
}

export function cleanupWindow (win) {
  win.removeAllListeners()
  win.webContents.removeAllListeners()
  win.destroy()
  win = null
}

export function makeScreenshot ({ url, width, height, delay }, win) {
  return Promise(async (resolve, reject) => {
    await setWindowProps({ url, width, height }, win)
    await utils.wait(delay)
    const filename = utils.fileNameFromURL(url)
    await saveScreenshot({ url, filename }, win)
  })
}

export function makeScreenshots (routes, delay = 0) {
  const win = createWindow()
  const routePromises = routes.map(route => makeScreenshot(route, win))
  return Promise
    .all(routePromises)
    .then(() => cleanupWindow(window))
    .catch(console.error)
}
