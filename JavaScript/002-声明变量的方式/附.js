for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i)
}

//会打印三次 abc


for (var i = 0; i < 3; i++) {
    var i = 'abc';
    console.log(i);
}
console.log(i)  //NaN
// 会打印一次 abc

// 原因：let存在块级作用域， for循环括号中的作用域是循环体的父级作用域，所以互不影响
// var关键字没有块级作用域，会将for循环括号中的变量 i 覆盖