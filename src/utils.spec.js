import * as util from './utils.js'

jest.useFakeTimers()

describe('utils', () => {

  it('remove http/https from url', () => {
    expect(util.removeHttpsFromURL('http://my-url.com')).toBe('my-url.com')
    expect(util.removeHttpsFromURL('https://my-url.com')).toBe('my-url.com')
  })

  it('remove www from url', () => {
    expect(util.removeWWWFromURL('www.my-url.com')).toBe('my-url.com')
  })

  it('replaces special characters with dashes', () => {
    expect(util.replaceSpecialCharactersWith('my.special.url.com/with/subroutes'))
      .toBe('my-special-url-com-with-subroutes')
  })

  it('sanitizes url', () => {
    expect(util.sanitizeUrl('https://www.my.special.url.com/with/subroutes'))
      .toBe('my-special-url-com-with-subroutes')
  })

  it('sets a timeout', () => {
    util.wait(1000)
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout.mock.calls[0][1]).toBe(1000)
  })

})