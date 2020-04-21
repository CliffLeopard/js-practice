;
const xm = (function () {
  obj = {}

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
  
  obj.flag = flag
  obj.sum = sum
  obj.XM = XM
  return obj
})()