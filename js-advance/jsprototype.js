//  call apply借用函数
let data = {
  lessons: {
    java: 100,
    php: 90,
    js: 14,
    scala: 1000
  }
}

//  apply不可以传递多参数,第二个参数是数组 ,call传递多参数
let min = Math.min.apply(null, Object.values(data.lessons))
let max = Math.max.call(null, ...Object.values(data.lessons))
console.log(min)
console.log(max)


// 使用原型借用函数,再次举例,NodeList使用Array的filter方法

let btns = document.querySelectorAll('button')
console.log(btns)
console.log(btns.__proto__)
let now_btns = [].filter.call(btns, item => item.className == 'btn1')
console.log(btns)
console.log(now_btns)

let hd = {
  name: 'cliff',
  show() {
    console.log(this.name)
  }
}
hd.show()


//  this指向对象内部,即使更换Prototype.
let cliff = {
  name: "cliff"
}

let User = {
  name: 'User',
  show() {
    console.log(this.name)
  }
}

Object.setPrototypeOf(cliff, User)
cliff.show();


// Object.create 与 __proto__

let my_obj = {
  name: 'my_obj',
  show() {
    console.log(this.name)
  }
}

let a_obj = Object.create(my_obj, {
  pass: {
    value: 'leopard'
  },
  show2: {
    value: function () {
      console.log(this.pass, this.name)
    },
  }
})

a_obj.show()
a_obj.show2()

// 以上a_obj的设置方法,等同于b_obj的设置方法

let b_obj = {
  pass:'leoaprd',
  show2(){
    console.log(this.pass, this.name)
  }
}
Object.setPrototypeOf(b_obj,my_obj)
// b_obj.__proto__ = my_obj    这种设置方法于上面一行等价

b_obj.show()
b_obj.show2()


let c_obj = {
  pass:'leoaprd',
  show2(){
    console.log(this.pass, this.name)
  }
}

// b_obj.prototype = my_obj

function createObj(ppp){
  this.ppp = ppp
  return c_obj
}
// console.dir(createObj)

let d_obj = new createObj("sd");
console.log(d_obj)
console.log(typeof d_obj)
console.log(my_obj)
console.log(b_obj)
c_obj.show()
c_obj.show2()




