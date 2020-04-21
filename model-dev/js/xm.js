// 1. 定义时导出变量
// export let flag = true
// export function sum(a, b) {
//   return a + b
// }
// export class XM {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   print() {
//     return "小明的名字:" + this.name + "  小明的年龄:" + this.age
//   }
// }

// 2. 统一导出
let flag = true
function sum(a, b) {
  return a + b
}
class XM {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  print() {
    return "小明的名字:" + this.name + "  小明的年龄:" + this.age
  }
}
export { flag, sum, XM }

// 3. 导出方式3:默认导出
export default XM