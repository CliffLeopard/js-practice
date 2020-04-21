function User(name) {
  this.name = name
}
User.prototype.show = function () {
  console.log( "show-user:" + this.name)
}
User.prototype.print = function () {
  console.log("print:" + this.name)
}

// 多态子类Admin
function Admin(name) {
  // 使用父亲的构造函数
  User.call(this, name)
}
Admin.prototype.__proto__ = User.prototype  //指定所继承的函数
Admin.prototype.show = function () {
  console.log("show-admin:" + this.name)
}

// 多态子类Employee
function Employe(name) {
  User.call(this, name)
}
Object.setPrototypeOf(Employe.prototype,User.prototype) //不同写法,作用相同
Employe.prototype.show = function () {
  console.log("show-employe:" + this.name)
}


console.dir(User)
console.dir(Admin)
console.dir(Employe)
console.log('\n')
for (item of [new User('张三'), new Admin('李四'), new Employe('赵五')]) {
  item.show()   // - 多态函数
  item.print(); // - 继承函数
  console.log('\n')
}