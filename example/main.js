const vm = new Vue({
  el: "#vm",
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2006-09',
        price: 85.00,
        number: 1,
      },
      {
        id: 2,
        name: 'UNIX编程艺术',
        date: '2006-09',
        price: 59.00,
        number: 1,
      },
      {
        id: 3,
        name: '编程珠玑',
        date: '2006-09',
        price: 39.00,
        number: 1,
      },
      {
        id: 4,
        name: '代码大全',
        date: '2006-09',
        price: 128.00,
        number: 1,
      }
    ],
    headers: [
      '书籍名称',
      '出版日期',
      '价格',
      '购买数量',
      '操作'
    ]
  },
  computed: {
    totalPrice() {
      let sum = 0.00;
      this.books.forEach(function (book) {
        sum += book.price * books.number;
      })
      return sum.toFixed(2);
    },
    totalPrice2() {
      let result = this.books.reduce(function (sum, book) {
        return sum + book.price * book.number;
      }, 0.0)
      return result.toFixed(2);
    }
  },
  methods: {
    increment(index) {
      this.books[index].number++
      console.log("increment:" + index)
    },
    decrement(index) {
      if (this.books[index].number > 1)
        this.books[index].number--
      console.log("decrement:" + index)
    },
    remove(index) {
      this.books.splice(index, 1)
      console.log("remove:" + index)
    }
  },
  filters: {
    getPrice(price) {
      return "¥" + price.toFixed(2)
    }
  }

})