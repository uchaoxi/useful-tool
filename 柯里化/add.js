function add(a, b) {
    return a + b;
}
function add2(a) {
    return function (b) {
        return a + b;
    }
}
function add3(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// console.log(add2(1)(2))
// console.log(add3(1)(2)(3))

// 初步封装
var curry = function (fn, ...args) {
    // args 获取第一个方法内的全部参数
    return function (...args1) {
        var newArgs = args.concat(args1)
        return fn.apply(this, newArgs)
    }
}
var newadd = function () {
    return (...args) => {
        return args.reduce((prev, cur) => {
            return prev + cur;
        })
    }
}

let addn = curry(newadd);
console.log(addn(1)(2)(3));