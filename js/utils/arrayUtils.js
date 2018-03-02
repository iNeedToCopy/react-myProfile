import Empty from './emptyUtils'

exports.isStringInArray = function (arr, str) {
  if(Empty.check(arr) && Empty.check(str)){
    for(let a of arr) {
      if(a === str){
        return true
      }
    }
  }
  return false
}
