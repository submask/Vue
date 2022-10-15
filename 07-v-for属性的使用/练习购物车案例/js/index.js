const vue = new Vue({
  el: "#app",
  data: {
    list: [
      { bid: 2024, bna: "《数据结构与算法》", dates: "2018-7", price: 76.50, couts: 0 },
      { bid: 2671, bna: "《计算机原理与应用》", dates: "2018-9", price: 88.00, couts: 0 },
      { bid: 7012, bna: "《离散数学》", dates: "2019-10", price: 66.00, couts: 0 },
      { bid: 1677, bna: "《马克思原理》", dates: "2018-5", price: 99.00, couts: 0 },
      { bid: 1711, bna: "《线性代数》", dates: "2019-6", price: 88.00, couts: 0 },
      { bid: 1651, bna: "《高等数学（同济版）》", dates: "2016-6", price: 89.00, couts: 0 },
      { bid: 4131, bna: "《计算机应用基础》", dates: "2021-9", price: 85.50, couts: 0 },
      { bid: 4325, bna: "《JavaSE基础应用》", dates: "2022-1", price: 64.00, couts: 0 },
      { bid: 4775, bna: "《Web开发与应用》", dates: "2021-12", price: 99.00, couts: 0 },
      { bid: 4671, bna: "《Pyhton开发与应用》", dates: "2021-11", price: 88.00, couts: 0 },
      { bid: 4672, bna: "《移动应用与开发》", dates: "2022-1", price: 61.00, couts: 0 },
      { bid: 5133, bna: "《云计算概论》", dates: "2021-2", price: 54.00, couts: 0 },
    ],
    CountIndex: -1,
  },
  filters: {
    PriceFilters(val) {
      return "￥" + val.toFixed(2)
    }
  },
  methods: {
    // 计算总价钱
    TotalPrice() {
      let sum = 0
      for (let book of this.list) {
        sum += book.price * book.couts
      }
      return sum
    },
    //增加数量
    addBc(index, event) {
      this.list[index].couts += 1
    },
    //减少数量 
    delBc(index, event) {
      if (this.list[index].couts > 0) {
        this.list[index].couts -= 1
      }
    },
    //减少项目 
    RemoveItem(index) {
      this.list.splice(index, 1)
    },
  },
})