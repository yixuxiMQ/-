// 1. typeof 操作符返回一个字符串，表示未经计算的操作数的类型。
// function a(){}
// let obj = {};
// let syl = Symbol();
// let fun = new Function;
// console.log(typeof 25);          //number
// console.log(typeof 'javascript');            //string
// console.log(typeof true);            //boolean
// console.log(typeof undefined);           //undefined
// console.log(typeof null);            //object
// console.log(typeof Array);           //function
// console.log(typeof Object);          //function
// console.log(typeof a);           //function
// console.log(typeof Symbol);          //function
// console.log(typeof obj);         //object
// console.log(typeof Boolean);            //function
// console.log(typeof syl);         //symbol
// console.log(typeof fun);         //function      除 Function 外的所有构造函数的类型都是 'object'
// console.log(typeof /s/);            //object

// 为什么 typeof null 的结果是 'null' ???
// 这要从底层说起，JavaScript在底层存储变量的时候，会在变量的机器码的低位1-3位存储它的类型信息
// 000 表示 对象        因为 null 所有机器码均为 0 所以 typeof null == 'object'
// 010 表示 浮点数
// 100 表示 字符串
// 110 表示 布尔值
// 1 表示 整数


// -----------------------------------------------------------------------------------------------------------




// 2. instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// 构造函数的实例
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let xm = new Person('xiaoming', 23);

// let result1 = xm instanceof Person;
// let result2 = xm instanceof Object;
// console.log(result1);    //true
// console.log(result2);    //true

//  继承
class Person {
    constructor(lastName) {
        this.lastName = lastName;
    }

    drink(){
        console.log('drink water')
    }
}

class Father extends Person {
    constructor(lastName, age) {
        super(lastName)
        this.age = age;
    }

    say(){
        console.log(`My lastname is ${ this.lastName }, I am ${ this.age } years old.`)
    }
}

let son = new Father('xiao', 25)
// console.log(son instanceof Father);     //true
// console.log(son instanceof Person);     //true
// console.log(son instanceof Object);     //true


// 实现原理
// 通过遍历左边实例对象的原型链，判断右边函数的 prototype 属性是否存在于左边实例对象的原型链上
// Object.getPrototypeOf(obj)   可以返回 obj 的原型
function myInstanceOf(valL, valR) {
    // 判断valL是否为实例对象
    if (!valL || (typeof valL !== 'object' && typeof valL !== 'function')) {
        return false;
    }
    // 判断valR是否为函数
    if (typeof valR !== 'function') {
        throw new TypeError(valR + '不是函数');
    }

    // 寻找 valL 的原型
    let oValL = Object.getPrototypeOf(valL);
    let oValR = valR.prototype;

    while (oValL) {
        if (oValL === oValR) {
            return true;
        }
        oValL = Object.getPrototypeOf(oValL);
    }
    return false;
}

console.log(myInstanceOf(son, Father));     //true
console.log(myInstanceOf(son, Person));     //true
console.log(myInstanceOf(son, Object));     //true