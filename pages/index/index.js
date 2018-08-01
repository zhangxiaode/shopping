//index.js
//获取应用实例
// const app = getApp()
// import ajax from "../../utils/ajax"
Page({
  data: {
    menuIndex: 0,
    menuList:[
      {
        value:'热销',
        id: 'hot'
      },
      {
        value:'折扣',
        id: 'cheap'
      },
      {
        value:'新品推荐',
        id: 'new'
      },
      {
        value:'精品冷菜',
        id: 'cold'
      },
      {
        value:'精品小菜',
        id: 'small'
      },
      {
        value:'五谷杂粮',
        id: 'cereals'
      },
      {
        value:'天然饮品',
        id: 'natural'
      },
      {
        value:'时尚酷饮',
        id: 'fashion'
      },
      {
        value:'服务承诺',
        id: 'service'
      }
    ],
    orientate: 'hot',
    cookList: [
      {
        cookHd: '热销',
        id: 'hot',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 1
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 2
          }
        ]
      },
      {
        cookHd: '折扣',
        id: 'cheap',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '新品推荐',
        id: 'new',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '精品冷菜',
        id: 'cold',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '精品小菜',
        id: 'small',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '五谷杂粮',
        id: 'cereals',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '天然饮品',
        id: 'natural',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '时尚酷饮',
        id: 'fashion',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
      {
        cookHd: '服务承诺',
        id: 'service',
        cookBd: [
          {
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            icon: '../../assets/item.jpg',
            cookName: '红烧肉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      },
    ]
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  changeIndex(event){
    this.setData({
      menuIndex: event.currentTarget.dataset.index,
      orientate: event.currentTarget.dataset.id
    })
  },
  handlePlus(event){
    event.currentTarget.dataset.num++
  },
  handleMinus(event){
    event.currentTarget.dataset.num--
  },
  //事件处理函数
  // bindViewTap: () => {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // gopage1(){
  //   wx.switchTab({
  //     url: '../page1/index'
  //   })
  // },
  onLoad: function() {
    /*ajax({
      url: `/endpoint/login/captcha.jpg`,
      method: "get",
      data: {
      }
    }).then(res=>{
      // console.log(111,res)
    })*/
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function(e) {
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
