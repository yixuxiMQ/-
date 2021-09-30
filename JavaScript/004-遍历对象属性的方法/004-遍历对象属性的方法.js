const parentObj = {
    a: 'aaa',
    b: Symbol('bbb'),
    c: 'ccc'
};

const obj = Object.create(parentObj, {
    d: {
        value: 'ddd',
        enumerable: true
    },
    e: {
        value: 'eee',
        enumerable: false
    },
    [Symbol('f')]: {
        value: 'fff',
        enumerable: true
    }
});

// Object.keys() 返回一个所有元素为字符串的数组
console.log(Object.keys(obj));  //[ 'd' ]


// Object.values() 返回一个数组，其元素是在对象上的可枚举属性的值
console.log(Object.values(obj));    //[ 'ddd' ]


// obj.entries() 返回一个数组，其元素是直接在obj上找到的可枚举属性键值对相对应的数组
console.log(Object.entries(obj))    //[ [ 'd', 'ddd' ] ]


// Object.getOwnPropertyNames() 返回一个数组，其元素为obj自身的属性名（包括可枚举和不可枚举，但是不包括Symbol类型的属性名）
console.log(Object.getOwnPropertyNames(obj))     //[ 'd', 'e' ]


// Object.getOwnPropertySymbols() 返回一个数组，其元素为 obj自身所有Symbol属性
console.log(Object.getOwnPropertySymbols(obj))  //[ Symbol(f) ]


// for in ，遍历所有可枚举的属性（包括原型上的属性），可以利用 obj.hasOwnProperty()判断对象是否包含某个属性
for (const key in obj) {
    console.log(key);    //d a b c
}
console.log(obj.hasOwnProperty('d'))    //true
// for in 更适合遍历对象，而非数组


// for of ，必须部署了iterator接口之后方可使用，
// 使用范围：数组、Set、Map、类数组（arguments、DOMNodeList对象）、Generator对象以及字符串
for (const i of Object.values(obj)) {
    console.log(i)
}


Object.values(obj).forEach(val => {
    console.log(val);   //ddd
});


// Reflect.ownKeys() 返回一个数组，其元素为obj自身所有属性名（不区分能否枚举和Symbol）
console.log(Reflect.ownKeys(obj));  //[ 'd', 'e', Symbol(f) ]
