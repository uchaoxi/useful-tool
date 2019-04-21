function mergeSort(arr, left, right) {
    if (left == right) {
          return [arr[left]];
    }
    let mid = Math.floor((left + right) / 2);
    let l = mergeSort(arr, left, mid);
    let r = mergeSort(arr, mid + 1, right);
    return merge(l,r);
}

function merge(l,r) {
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
console.log(mergeSort([6, 3, 66, 23, 1],0,4));