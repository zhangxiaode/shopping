//index.js
import { cookList } from '../../utils/cookList.js'
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
    cookList
  },
  changeIndex(event){
    this.setData({
      menuIndex: event.currentTarget.dataset.index,
      orientate: event.currentTarget.dataset.id
    })
  },
  onShow() {
    this.setData({
      cookList
    })
    // console.log(123, cookList)
    // console.log(321, this.data.cookList)
  },
  onHide() {
    // this.setData({ cookList })
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
