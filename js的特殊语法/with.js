//with的作用是把代码的作用域设置到一个特定的对象中
//定义with的目的是为了简化多次编写同一个对象的工作
//with的代码块内部，每个变量首先被认为是局部变量，
//如果局部作用域中找不到变量的定义，则在with关联的对象中找
//严格模式下不能使用with语句，否则报错

// 'use strict'
let obj = {a:1,b:'abc'};

with(obj){
    let a = 123;
    console.log(a);
    console.log(b);
}