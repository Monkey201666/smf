var str = "hello world";

console.log(typeof str);

//1、字符串字符数
console.log(str.length);

//2、字符串和其他类型转换
// + 符号
//Boolean
var booValue = true;
console.log("布尔值：" + booValue);
//number
var numValue = 100;
console.log(numValue);
console.log("number值：" + numValue);
//toString()  
var str2 = numValue.toString();
console.log(typeof str2);
// Number() 方法   其他类型转Number
var str3 = "abc";
var val = Number(str3);
console.log(val);
// parseInt()、parsefloat()方法  侧重数值型转化
var str4;
console.log(parseInt(str4));







