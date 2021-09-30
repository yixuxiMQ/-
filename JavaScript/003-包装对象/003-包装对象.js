// string、boolean、number几个基本类型能够调用属性和方法，就是对包装对象最好的反映
const str = 'string';
const num = 123;
const bool = true;

console.log(str.toString()) //'string'
console.log(num.toString()) //'123'
console.log(bool.toString()) //'true'


// 包装对象是一种特殊的引用类型，与其他引用类型的主要区别在于它们自身的生命周期
// 一般的引用类型在使用new关键字创建实例时，在执行流程离开当前作用域之前一直保存在内存中
// 包装类型的对象只存在该代码执行的瞬间，之后就会被立即销毁（意味着在运行时不能为基本类型添加属性和方法）

// 包装对象后台执行流程：
// 1.创建一个对象类型的实例，例如字符串创建一个String类型的实例
// 2.调用该实例对象上的特定方法
// 3.销毁该实例

const str = 'abc';
const strNew = str.substring(0, 2);     //str.substring()方法截取从第 0 位开始到第 2 位之间的字符串，不包括第2位

// 运行到str.substring(0, 2)这一步时，后台执行了三步：
let strObj = new String(str);
const strNew = strObj.substring(0, 2);
strObj = null;



// 同一个字符串调用两次相同的方法，它的包装对象也不会相等，因为在调用方法结束后，包装对象会立即销毁，再一次调用会生成新的对象