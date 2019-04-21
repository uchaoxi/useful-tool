//先选择一个记录作为基准元素，称为key，设置两个变量，left指向数列最左部，right指向数列最右
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let key = arr.splice(0,1);
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<key){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }     
    }
    return quickSort(left).concat(key,quickSort(right));
}

let a = [53,1,66,7,8,9]
console.log(quickSort(a))