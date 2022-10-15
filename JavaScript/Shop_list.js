const vue = new Vue({
  el: "#app",
  data: {
    books: [
      { bid: 1, bname: "《算法导论》", datas: "2006-9", price: 85.00, count: 0 },
      { bid: 2, bname: "《UNIX编程艺术》", datas: "2006-2", price: 59.00, count: 0 },
      { bid: 3, bname: "《编程珠玑》", datas: "2008-10", price: 39.00, count: 0 },
      { bid: 4, bname: "《代码大全》", datas: "2006-3", price: 128.00, count: 0 }
    ],
  },
  methods: {
    isAddBtn(index){
     this.books[index].count+=1
    },
    isRemovedBtn(index){
      this.books[index].count-=1
    },
    isRemove(index){
      this.books.splice(index,1)
    }
  },
  filters:{
    Filterprice(val){
      return "￥" + val.toFixed(2)
    }
  },
  // filter过滤
  //map 映射（数据操作）
  //reduce 汇总
  computed:{
    TotalPrice(){
      let sum=0
      for(let i=0;i<this.books.length;i++){
        if (this.books[i].count != 0 && this.books[i].count>=0){
          sum+=this.books[i].price*this.books[i].count
        }
      }
      return sum
    }
  }
})