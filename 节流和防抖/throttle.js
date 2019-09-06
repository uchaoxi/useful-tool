//节流，高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle1 (callback, delay, ...args) {
  let flag = true;
  return function (e) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        callback(e, ...args);
        flag = true;
      }, delay)
    }
  }
}
//比throttle1少了个flag,多了个timer,更加语义化了，
function throttle2 (callback, delay, ...args) {
  let timer = null;
  return (e) => {
    if (!timer) {
      timer = setTimeout(() => {
        callback(e, ...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  }
}
//网上的方法，和12相比，可以传递绑定对象this(return的function不能用箭头函数),不能传自定义的参数。
function throttle3 (fn) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, 500);
  };
}

//综合优点，语义化、可以传递this，可以传递e，可以传递自定义参数
//注意：只有return后面是function时，arguments才能正常传递e，以及this才能正常指向调用的对象
function throttle4 (callback, delay, ...args) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        callback.call(this, ...arguments, ...args);
        clearTimeout(timer);
        timer = null;
      }, delay)
    }
  }
}
//抛弃了setTimeout,但是有问题，和setTimeout不同，因为是执行一次，等一段时间，再执行一次
//setTimeout是先等一段时间，然后执行时，把这段时间的操作都做了，所以比较流畅
// function throttle5(callback, delay,...args){
//     let startTime = 0;
//     return function()  {
//       let curTime = new Date();
//       if(curTime - startTime > delay) {
//         callback.call(this, ...arguments,...args);
//         startTime = new Date();
//       }
//     }
// }