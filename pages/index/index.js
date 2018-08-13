//index.js
//获取应用实例
const app = getApp()
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
            id: 0,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 1,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 2,
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
        cookHd: '折扣',
        id: 'cheap',
        cookBd: [
          {
            id: 3,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 4,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 5,
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
            id: 6,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 7,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 8,
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
            id: 9,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 10,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 11,
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
            id: 12,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 13,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 14,
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
            id: 15,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 16,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 17,
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
            id: 18,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 19,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 20,
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
            id: 21,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 22,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 23,
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
            id: 24,
            icon: '../../assets/item.jpg',
            cookName: '尖椒大肠',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: 25,
            icon: '../../assets/item.jpg',
            cookName: '红烧猪蹄',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: 26,
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
  },
  changeIndex(event){
    this.setData({
      menuIndex: event.currentTarget.dataset.index,
      orientate: event.currentTarget.dataset.id
    })
  },
  onShow() {
    let cookList = this.data.cookList
    cookList.map(items => {
      items.cookBd.map(item => {
        app.data.selectedCook.map(ele => {
          if (ele.id == item.id) {
            item.num = ele.num
          }
        })
      })
    })
    this.setData({cookList})
  },
  onLoad() {
    /*ajax({
      url: `/endpoint/login/captcha.jpg`,
      method: "get",
      data: {
      }
    }).then(res=>{
      // console.log(111,res)
    })*/
  }
})
