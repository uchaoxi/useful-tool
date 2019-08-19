//promise的功能
//new Promise(function(resolve,reject){}).then().catch()

function Promise(fn) {
  var callbacks = []
  var handlers = []
  this.then = (callback) => {
    callbacks.push(callback)
  }
  this.catch = (handler) => {
    handlers.push(handler)
  }
  function resolve(value) {
    callbacks.forEach(callback => callback && callback(value)) 
  }
  function reject (value) {
    handlers.forEach(handler => handler && handler(value))
  }
  fn(resolve, reject)
}