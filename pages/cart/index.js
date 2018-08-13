//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cookList: [],
    price: 0
  },
  //事件处理函数
  onShow() {
    this.setData({
      cookList: app.data.selectedCook,
      price: app.data.price
    })
  },
  onHide(){
    this.setData({
      cookList: app.data.selectedCook
    })
  }
})
