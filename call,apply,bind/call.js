Function.prototype.mycall = function (context, ...args) {
  if (context === undefined || context === null) {
    context = global
  } else {
    context = Object(context)
  }
  const selfFunc = Symbol('selfFunc')
  context[selfFunc] = this
  let result = context[selfFunc](...args)
  delete context[selfFunc]
  return result
}

Function.prototype.myapply = function (context, args) {
  if (context === undefined || context === null) {
    context = global
  } else {
    context = Object(context)
  }
  const selfFunc = Symbol('selfFunc')
  context[selfFunc] = this
  const result = context[selfFunc](...args)
  delete context[selfFunc]
  return result
}
Function.prototype.mybind = function (context, args) {
  if (context === undefined || context === null) {
    context = global
  } else {
    context = Object(context)
  }
  const selfFunc = Symbol('selfFunc')
  context[selfFunc] = this
  return context[selfFunc]
}
let result = Math.max.myapply(null, 3)
console.log(result)