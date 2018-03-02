import Empty from './emptyUtils'

exports.isReal = () => {
  if (process.env.API_ENV === 'ci' || process.env.API_ENV === 'production') {
    return true
  } else {
    return false
  }
}
