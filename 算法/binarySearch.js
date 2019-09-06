const arr = [1, 2, 3, 4, 5, 6, 7]
function binarySearch (array, start, end, num) {
  let middle = Math.floor((start + end) / 2)
  if (array[middle] === num) {
    return middle
  }
  if (array[middle] > num) {
    return binarySearch(array, start, middle - 1, num)
  } else {
    return binarySearch(array, middle + 1, end, num)
  }
}
const result = binarySearch(arr, 0, arr.length, 7)
console.log(result)