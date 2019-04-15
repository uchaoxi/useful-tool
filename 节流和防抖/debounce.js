
//事件触发时开始计时，计时没有完成又触发就清空计时，重新计算。
function debounce(callback, delay, ...args) {

    let timer = null;
    return function () {

        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(this, ...arguments, ...args);
            timer = null;
        }, delay)
    };
}


//事件触发时开始计时，计时没有完成又触发就清空计时，重新计算。
function debounce2(callback, delay, immediate, ...args) {
    let timer = null;
    return function () {
        if (immediate) {
            callback.call(this, ...arguments, ...args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(this, ...arguments, ...args);
            timer = null;
        }, delay)
    };
} 