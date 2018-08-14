const app = getApp()
import { cookList, changeCook } from '../../utils/cookList.js'
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: { 
    item: Object
  },
  data: {
    item:{}
  },
  attached() {
    this.dataInit()
  },
  methods: {
    dataInit(){
      this.setData({
        item: this.properties.item
      })
    },
    handlePlus(event) {
      let item = this.data.item
      item.num++
      this.setData({ item })

      // cookList.map(children => {
      //   children.cookBd.map(child=> {
      //     if (item.id == child.id){
      //       child.num++
      //     }
      //   })
      // })
      let total = 0
      cookList.map(children => {
        children.cookBd.map(child => {
          if (child.num > 0) {
            total += child.num
          }
        })
      })
      wx.setTabBarBadge({
        index: 1,
        text: total.toString()
      })
      this.triggerEvent('changeNum')
    },
    handleMinus(event) {
      let item = this.data.item
      item.num--
      this.setData({ item })

      // cookList.map(children => {
      //   children.cookBd.map(child => {
      //     if (item.id == child.id) {
      //       child.num--
      //     }
      //   })
      // })
      let total = 0
      cookList.map(children => {
        children.cookBd.map(child => {
          if (child.num>0) {
            total += child.num
          }
        })
      })
      if(total <= 0){
        wx.removeTabBarBadge({
          index: 1
        })
      } else {
        wx.setTabBarBadge({
          index: 1,
          text: total.toString()
        })
      }
      this.triggerEvent('changeNum')
    }
  }
})
