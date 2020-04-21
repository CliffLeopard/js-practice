// var a = 100
// var b = 200

// var a1 = 100
// var b1 = 200

// var a2 = 100
// var b2 = 200

// function sum(a, b) {
//   this.a = a
//   this.b = b
//   return a + b
// }

// let sum1 = function (a, b) {
//   this.a1 = a
//   this.b1 = b
//   return a + b
// }

// let sum2 = (a, b) => {
//   this.a2 = a
//   this.b2 = b
//   return a + b
// }

// console.log('sum:')
// console.log(sum)
// // console.log(sum(1, 2))
// // console.log(sum(1, 2, 3))

// let sum_obj = new sum(10, 12)
// console.log(sum_obj)
// console.log(sum.prototype)
// console.log(sum_obj.__proto__)
// console.log(sum_obj.__proto__ == sum.prototype)


// console.log('\n')
// console.log('sum1:')
// console.log(sum1)
// console.log(sum1)
// // console.log(sum1(1, 2))
// // console.log(sum1(1, 2, 3))

// let sum1_obj = new sum1(10, 12, 13, 34)
// console.log(sum1_obj)
// console.log(sum1.prototype)
// console.log(sum1.__proto__)
// console.log(sum1.prototype === sum1.__proto__)

// console.log('\n')
// console.log('sum2:')
// console.log(sum2)
// // console.log(sum2(1, 2))
// // console.log(sum2(1, 2, 3))
// console.log(sum2.prototype)
// console.log(sum2.__proto__)
// console.log(sum2.prototype === sum2.__proto__)

// let sum2_obj = sum2.__proto__()
// console.log(sum2_obj)

// console.log('\n')
// console.log('a:', a, 'a1:', a1, 'a2:', a2)
// console.log('b:', b, 'b1:', b1, 'b2:', b2)


// function sum6(a,b){
//   this.a = a
//   this.b = b
//   this.afun = function(){
//       return this.a+this.b
//   }
// }

// let a_sum = new sum6(10,11)
// console.log(a_sum.afun)
// console.log(a_sum.afun())



// function fn() {
//   this.a = 'AAA'
// }

// a_fn是一个函数实例
// let a_fn = new fn()
// let abc = ['AA']
// console.log(abc)
// console.log(a_fn)
// console.log(fn.prototype)
// console.log(a_fn.__proto__)
// console.log(Object.getPrototypeOf(a_fn) === a_fn.__proto__)
// console.log(Object.getPrototypeOf(abc) === abc.__proto__)

// a_fn.__proto__.hello = function () {
//   console.log('Hello World')
// }
// a_fn.hello()
// let b_fn = new fn()
// b_fn.hello()
// console.log(a_fn.__proto__ === fn.prototype)

// fn是一个函数,函数也是对象,则fn是一个Object实例
// console.log(Object)
// console.log(Object.prototype)
// console.log(fn.__proto__)
// console.log(fn.__proto__ === Object.prototype)

