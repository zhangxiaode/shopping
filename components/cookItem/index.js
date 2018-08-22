const app = getApp()
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
      app.globalData.cookList.map((element, index) => {
        element.cookBd.map((child, idx) => {
          if (child.id === item.id) {
            child.num = item.num
          }
        })
      })
      this.triggerEvent('changePrice')
    },
    handleMinus(event) {
      let item = this.data.item
      item.num--
      this.setData({ item })
      app.globalData.cookList.map((element, index) => {
        element.cookBd.map((child, idx) => {
          if (child.id === item.id) {
            child.num = item.num
          }
        })
      })
      this.triggerEvent('changePrice')
    }
  }
})
