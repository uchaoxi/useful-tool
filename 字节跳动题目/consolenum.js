//每秒输出一个数字1，2，。。。，10
for(let i =1;i<=10;i++){
    setTimeout(function(){
        console.log(i)
    },1000*i);
}