import { app } from 'electron'
import { makeScreenshots } from '../src/screenshotService'

app.on('ready', () => {

  makeScreenshots([
    {
      url: 'https://google.com',
      width: 1024,
      height: 768,
    }
  ], 50)

})
