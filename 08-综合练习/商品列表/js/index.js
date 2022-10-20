const vue = new Vue({
  el: "#app",
  data: {
    list: [
      { item: "苹果手机", price: 6000, isActive: false },
      { item: "一加手机", price: 5000, isActive: false },
      { item: "oppo手机", price: 4000, isActive: false },
      { item: "vivo手机", price: 3000, isActive: false },
      { item: "华为手机", price: 2000, isActive: false },
      { item: "小米手机", price: 1000, isActive: false },
      { item: "诺基亚手机", price: 900, isActive: false },
    ],
    Item_index: -1,
    Item_Price: 0
  },
  methods: {
    isChange(index) {
      if (this.list[index].isActive == false) {
        this.list[index].isActive = true

      } else {
        this.list[index].isActive = false
      }
      this.Item_index = index
    },
    isChangeColor(index) {
      return { active: this.list[index].isActive }
    }
  },
  computed: {
    Total_Price() {
      if (this.Item_index != -1) {
        if (this.list[this.Item_index].isActive == true) {
          this.Item_Price += this.list[this.Item_index].price
        } else {
          this.Item_Price -= this.list[this.Item_index].price
        }
      }
      return this.Item_Price;
    }
  }
})