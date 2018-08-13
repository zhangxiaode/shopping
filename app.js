//app.js
App({
  data:{
    selectedCook: [],
    price: 0
  },
  changeCook(cookList){
    this.data.selectedCook = cookList
  },
  changePrice() {
    let price = 0
    this.data.selectedCook.map(item => {
      price += item.price * item.num
    })
    this.data.price = price
  },
  onLaunch() {
  },
  globalData: {
  }
})