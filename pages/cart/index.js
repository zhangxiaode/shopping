//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cookList:[
      {
        icon: '../../assets/item.jpg',
        cookName: '尖椒大肠',
        cookIntro: '带你赴一场美丽的旅行',
        sals: 12,
        like: 0,
        price: 38,
        num: 2
      },
      {
        icon: '../../assets/item.jpg',
        cookName: '红烧猪蹄',
        cookIntro: '一次让你吃个够',
        sals: 38,
        like: 25,
        price: 56,
        num: 1
      },
      {
        icon: '../../assets/item.jpg',
        cookName: '红烧猪蹄',
        cookIntro: '一次让你吃个够',
        sals: 38,
        like: 25,
        price: 56,
        num: 1
      }
    ]
  },
  //事件处理函数
  onLoad () {
    
  }
})
