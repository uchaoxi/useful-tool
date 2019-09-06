//归并排序（稳定）
//关键是划分半子表和合并半子表
//划分半子表：递归地划分，直到半子表为一个元素
//对于已经升序排序的两个数组，从左边第一个元素起进行比较，较小的的放进新数组
function mergeSort (arr, left, right) {
  if (left == right) {
    return [arr[left]];
  }
  let mid = Math.floor((left + right) / 2);
  let l = mergeSort(arr, left, mid);
  let r = mergeSort(arr, mid + 1, right);
  return merge(l, r);
}

function merge (l, r) {
  let all = [];
  let lp = 0;
  let rp = 0;
  while (lp < l.length && rp < r.length) {
    if (l[lp] < r[rp]) {
      all.push(l[lp]);
      lp++;
    } else {
      all.push(r[rp]);
      rp++;
    }
  }
  while (lp < l.length) {
    all.push(l[lp]);
    lp++;
  }
  while (rp < r.length) {
    all.push(r[rp]);
    rp++;
  }
  return all;

}
console.log(mergeSort([6, 3, 66, 23, 1], 0, 4));