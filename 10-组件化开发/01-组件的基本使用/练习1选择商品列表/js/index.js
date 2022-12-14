const vue = new Vue({
  el: "#app",
  data: {
    list: [
      { item: "联想小新", price: 6599, isActive: false },
      { item: "惠普暗影精灵", price: 9900, isActive: false },
      { item: "联想昭阳", price: 2400, isActive: false },
      { item: "联想拯救者", price: 8700, isActive: false },
      { item: "华硕天选", price: 8800, isActive: false },
      { item: "华硕飞行堡垒", price: 6000, isActive: false },
      { item: "外星人ROG", price: 12300, isActive: false }
    ],
    list_index: 0,
    list_count: 0
  },
  methods: {
    /*
      设置商品列表当前颜色
    */
    isColorChanges(index) {
      return { active: this.list[index].isActive }
    },
    isClick(index) {
      /*传递当前所点击元素的下标值*/
      this.list_index = index
      /*判断当前的下标所在的元素是否高亮*/
      if (this.list[index].isActive == false) {
        this.list[index].isActive = true
      } else {
        this.list[index].isActive = false
      }
    }
  },
  computed: {
    TotalPrice() {
      if (this.list[this.list_index].isActive == true) {
        this.list_count += this.list[this.list_index].price
      } else {
        if (this.list[this.list_index].isActive == false && this.list_index == 0) {
          this.list_count = this.list[this.list_index].price
        }
        this.list_count -= this.list[this.list_index].price
      }
      return this.list_count
    }
  }
})