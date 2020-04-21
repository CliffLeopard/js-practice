## JS函数高级

### 函数调用

```
  function sum(a,b){
      return a+b
  }

  sum(a,b)

  function sum2(a,b){
      this.a = a
      this.b = b
      this.afun = function (){
          return this.a+this.b
      }
  }

let a_sum = new sum2(10,11)
a_sum.afun();

```

### 原型
* 每一个函数都有一个prototype属性,都指向一个Object对象,此对象为函数的原型
* 原型对象中有constructor方法,指向函数对象
* 原型对象中添加属性/方法,则函数的所有实例对象都具有此属性/方法

### 隐式原型与原型链

* 实例对象中包含有__proto__属性,为隐式原型对象
* 隐式原型中存储的是实例的类型对象的原型prototype
* 对象查找属性的时候是按照隐式原型一步步向上查找,形成原型链

```
function f

```