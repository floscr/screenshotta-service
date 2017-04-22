import flow from 'lodash/fp/flow'

export function removeHttpsFromURL (url) {
  return url.replace(/^(https?|):\/\//, '')
}

export function removeWWWFromURL (url) {
  return url.replace(/^[w]+\./, '')
}

export function replaceSpecialCharactersWith (url, replacement = '-') {
  return url.replace(/[^a-zA-Z0-9]/g, replacement)
}

export function sanitizeUrl (url) {
  return flow(
    removeHttpsFromURL,
    removeWWWFromURL,
    replaceSpecialCharactersWith
  )(url)
}

export function wait (timeout) {
  return Promise((resolve, reject) => {
    setTimeout(resolve, timeout)
  })
}
