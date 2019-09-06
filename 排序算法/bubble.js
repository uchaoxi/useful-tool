
//冒泡排序(稳定)，从第一个到最后一个元素，比较相邻两个元素，如果第一个比第二个大，交换两个元素
function bubble (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//还有位运算的方法，使用数组、对象的方法……
