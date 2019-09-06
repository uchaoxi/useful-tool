const str = 'abc'
function fullRank (str) {
  if (str.length <= 1) {
    return [str]
  }
  let result = []
  for (let i = 0; i < str.length; i++) {
    let c = str[i]
    let newStr = str.substring(0, i) + str.substring(i + 1, str.length)
    let l = fullRank(newStr)
    for (let i = 0; i < l.length; i++) {
      result.push(c + l[i])
    }
  }
  return result
}
const result = fullRank(str)
console.log(result)