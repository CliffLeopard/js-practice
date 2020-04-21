/*
构造函数函数特点
1.函数体内使用了this关键字，代表了所要生成的对象实例
2.生成对象的时候必须使用new命令
3每个函数都自动添加一个名称为prototype属性，这是一个对象
4每个对象内部都有一个属性_proto_（规范没有这个名称，但是浏览器都是这么实现）
5指向其类型的prototype,类的实例也是对象，其_prototype_属性指向类的prototype
new命令的作用，就是执行构造函数，返回一个实例对象。
使用new命令是，他后面的函数执行下面的步骤
1创建一个空对象，作为将要返回的对象实例
2将这个空对象的原型，指向构造函数的prototype属性
3将这个空对象复制给函数内部this关键字
4开始执行构造函数内部的代码
如果构造函数内部return语句，后面跟着一个对象，
new命令会返回renturn语句指定的对象否则不管return语句,返回this

*/

function fuck1(){
  this.abc = 'fuck-abc'
  return "result-fuck1"
}

function fuck2(){
  this.abc = 'fuck-abc'
  return {
    ppp:'result-fuck2'
  }
}

function fuck3(){
  this.abc = 'fuck-abc'
  this.obj ={
    ppp:'result-fuck3'
  }
  return this.obj
}

// console.dir(fuck1)
// console.dir(fuck2)
// console.dir(fuck3)

let obj_fuck1 = new fuck1()
let obj_fuck2 = new fuck2()
let obj_fuck3 = new fuck3()

// console.log(obj_fuck1)
// console.log(obj_fuck2)
// console.log(obj_fuck3)

// console.log(obj_fuck1 === fuck1())
// console.log(obj_fuck2 === fuck2())

// console.log(fuck1())
// console.log(fuck2())


// console.log(fuck1.prototype.constructor)
// console.log(fuck2.prototype.constructor)