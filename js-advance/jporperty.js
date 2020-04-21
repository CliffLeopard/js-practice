function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype = {
  kk: "Hello",
  print:function(){
    console.log('name:',this.name,'age:',this.age)
  }
}

let p = new Person('cliff','19')
p.print();
console.log(p.kk);
Person.prototype.kk = 'world'
console.log(p.kk);

// -- 对prototype整体重新赋值,不会影响已经实例化出来的对象. 但是修改其中的值会影响.
Person.prototype = {
  kk: "FUCK",
  print:function(){
    console.log('name:',this.name,'age:',this.age)
  }
}
console.log(p.kk);

Object.prototype.a = ()=>console.log('a()');
function F(){}
Function.prototype.b = ()=>console.log('b()');

let f = new F();

console.log(f)
console.dir(F)
f.a()
// f.b()  b undefined 不是一个函数
F.a()
F.b()

a(),b(),a(),undefined

变量提升

var ts = 20
function fun(){
  console.log(ts) // 打印undefined
  var ts = 30;  
  console.log(ts) //打印30 
}
fun()

//  原因var声明的变量在函数题内部声明位置提升,变为这样
function fun(){
  var ts
  console.log(ts) // 打印undefined
  ts = 30;  
  console.log(ts) //打印30 
}
fun()

// 用let来重新玩一下,直接蹦错 Cannot access 'ts2' before initialization. 由提升变为了屏蔽作用域外的调用.

console.log('\n')
let ts2 = 20
function fun2(){
  console.log(ts2) // 打印undefined
  let ts2 = 30;  
  console.log(ts2) //打印30 
}
fun2()


if(true){
  var test2 = 'test211'
}
console.log(test2); // test211


 
if(('b' in window)){  // or b in window 一样的
  console.log(b)
  console.log('b  in window')
  var b  = 'bbbb'  // 由于这里的声明,在预处理中已经将b添加到window
}
console.log(b)


