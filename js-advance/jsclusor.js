// JS 事件模型
// let time1 = new Date().getTime()
// console.log(time1)
// // alert("Hello World")
// let time2 = new Date().getTime()
// setTimeout(()=>{
//   console.log('time1',new Date().getTime() - time1)
//   console.log('time2',new Date().getTime() - time2)
// },200)
// console.log(new Date().getTime() - time2)

//  测试generator函数
// function * testY() {
//   let a = 1
//   let b = yield a
//   console.log('inside received yield b:', b)
//   let c = yield ++b
//   console.log('inside received yield c:', c)
//   c += 10
//   return c
// }

// let result = testY()
// let r1 = result.next()
// console.log('outside r1',r1);

// let r2 = result.next(12)
// console.log('outside r2',r2);

// let r3 = result.next(50)
// console.log('outside r3',r3);


function testP(){
  return new Promise((resole,reject)=>{
    setTimeout(()=>{
      console.log('promise 异步任务')
      // resole('promise success');
      reject('promise error')
    },1000)
  })
}

// testP().then(()=>{
//   console.log('success')
// },()=>{
//   console.log('error')
// })

async function testAsyn(){
  console.log('begin')
  let result = await testP().catch((error)=>{
    console.log('there error')
    return 'haha'
  })
  console.log(result)
  console.log('after')
}
testAsyn()
console.log('finished')


//  Symbol

let symbol1 = Symbol()
let symbol2 = Symbol()
console.log(symbol1)
console.log(symbol2)