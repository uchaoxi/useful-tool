//快速排序（不稳定）的基本思想：通过一趟排序将待排记录分隔成独立的两部分，
//其中一部分记录的关键字均比另一部分的关键字小，
//则可分别对这两部分记录继续进行排序，以达到整个序列有序。
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let key = arr.splice(0, 1);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < key) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(key, quickSort(right));
}

let a = [53, 1, 66, 7, 8, 9]
console.log(quickSort(a))