export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function parseJSON(response) {
  return response.json()
}


/**
 * 自定义Fetch
 */
export function myFetch(url, options) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest()
    req.open(options.method, url+'?_=' + new Date().getTime())
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response)
      }
      else {
        reject(Error(req.statusText))
      }
    }
    req.onerror = function () {
      reject(Error("Network Error"))
    }
    req.send(options.body)
  })
}

