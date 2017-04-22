/* eslint-disable no-unused-expressions */
import chai from 'chai'
import expectToBeAPromise from 'expect-to-be-a-promise'

import * as util from './utils.js'

chai.use(expectToBeAPromise)
const { expect } = chai

describe('utils', () => {
  it('remove http/https from url', () => {
    expect(util.removeHttpsFromURL('http://my-url.com')).to.equal('my-url.com')
    expect(util.removeHttpsFromURL('https://my-url.com')).to.equal('my-url.com')
  })

  it('remove www from url', () => {
    expect(util.removeWWWFromURL('www.my-url.com')).to.equal('my-url.com')
  })

  it('replaces special characters with dashes', () => {
    expect(util.replaceSpecialCharactersWith('my.special.url.com/with/subroutes'))
      .to.equal('my-special-url-com-with-subroutes')
  })

  it('sanitizes url', () => {
    expect(util.sanitizeUrl('https://www.my.special.url.com/with/subroutes'))
      .to.equal('my-special-url-com-with-subroutes')
  })

  it('expects promise', () => {
    expect(util.wait(0)).to.be.a.promise
  })

})
