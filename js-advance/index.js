var b = 'boy'
console.log(b)
function fighting() {
  console.log(a)
  console.log(c)
  if (a == 'Apple') {
    a = 'Alice'
  } else {
    a = 'Ada'
  }
  console.log(a)
  var a = 'Andy'
  middle()
  function middle() {
    console.log(c++)
    var c = 100
    console.log(++c)
    small()
    function small() {
      console.log(a)
    }
  }
  var c = a = 88
  function button() {
    console.log(this.b)
    b = 'babby'
    console.log(b)
  }
  button()
}
fighting()
console.log(b)

console.log('预测结论:', 'boy', 'undifined', 'undifined', 'Ada', 'undifined', '101', 'Andy', 'boy', 'baby', 'babby')