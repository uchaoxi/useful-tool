let array = [11,5,6,2,7,22,1];
function cmp(a,b){
    return a-b;//从小到大是a-b,从大到小是b-a
}
array.sort(cmp);
console.log(array);