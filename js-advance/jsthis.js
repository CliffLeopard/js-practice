function Person(color) {
  console.log('A',this)
  this.color = color
  this.getColor = function () {
    console.log('B',this,this.color)
    return this.color
  }
  this.setColor = function (color) {
    this.color = color
    console.log('C',this,this.color)
  }

}
var color = 'red'
Person("blue")

var person = new Person("black")
person.getColor()
person.setColor('orange')

var a= 34
;[1,2,3,4].forEach(item =>{
  console.log(item)
})

var kk = new  Person('kk')
{
  var c = "kkk"
  console.log(c)
}