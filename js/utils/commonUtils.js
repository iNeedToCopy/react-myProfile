import Empty from './emptyUtils'

exports.isMobileOk = (mobile) => {
  let _pattern = /^1\d{10}$/
  return _pattern.test(mobile)
}
