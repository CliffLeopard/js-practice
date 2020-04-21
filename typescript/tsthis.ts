// 理解typeScript中的this
let deck = {
  suits: ["红桃", "黑桃", "梅花", "方片"],
  cards: Array(52),
  createCardPicker: function(){
    console.log("第一层函数 this:",this)
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      console.log("内层函数 this:",this);
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(cardPicker)
console.log(pickedCard)
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);