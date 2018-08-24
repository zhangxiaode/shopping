//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    orderNavList:[
      {
        name:'全部',
        status:true
      }, 
      {
        name: '待付款',
        status: false
      }, {
        name: '已付款',
        status: false
      },
    ],
    orderList:[
      // {
      //   orderNum: 9,
      //   orderPrice:'234',
      //   orderTime:'2018/08/24',
      //   status: 1
      // },
      // {
      //   orderNum: 9,
      //   orderPrice: '234',
      //   orderTime: '2018/08/24',
      //   status: 0
      // }
    ]
  },
  //事件处理函数
  switchNav(event) {
    var orderNavList = this.data.orderNavList
    orderNavList.map((item,index) => {
      if (index === event.currentTarget.dataset.index){
        item.status = true
      } else {
        item.status = false
      }
    })
    this.setData({
      orderNavList
    })
    if (this.data.orderList.length>0) {
      switch (event.currentTarget.dataset.index) {
        case 0:
          this.setData({
            orderList:[
              {
                orderNum: 2,
                orderPrice: '24',
                orderTime: '2018/06/14',
                status: 1
              },
              {
                orderNum: 9,
                orderPrice: '233',
                orderTime: '2018/08/25',
                status: 0
              }
            ]
          })
          break
        case 1:
          this.setData({
            orderList: [
              {
                orderNum: 9,
                orderPrice: '233',
                orderTime: '2018/08/25',
                status: 0
              }
            ]
          })
          break
        case 2:
          this.setData({
            orderList: [
              {
                orderNum: 2,
                orderPrice: '24',
                orderTime: '2018/06/14',
                status: 1
              }
            ]
          })
          break
        default:
          break
      }
    }
  },
  goIndex(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  onLoad(option) {
    var orderNavList = this.data.orderNavList
    orderNavList.map((item,index) => {
      if (index === parseInt(option.index)) {
        item.status = true
      } else {
        item.status = false
      }
    })
    this.setData({
      orderNavList
    })
  }
})
