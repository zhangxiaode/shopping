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

      let selectedCook = app.data.selectedCook
      const hasExist = selectedCook.some(ele => {
        return ele.id == item.id
      })
      let total=0
      if (!hasExist) {
        selectedCook.push(item)
      }else {
        selectedCook.map(ele => {
          if (ele.id == item.id) {
            ele.num = item.num
          }
        })
      }
      app.changeCook(selectedCook)
      app.changePrice()
      selectedCook.map(ele => {
        total += ele.num
      })
      wx.setTabBarBadge({
        index: 1,
        text: total.toString()
      })
    },
    handleMinus(event) {
      let item = this.data.item
      item.num--
      this.setData({ item })

      let selectedCook = app.data.selectedCook
      let total = 0
      selectedCook.map((ele, index) => {
        if (ele.id == item.id) {
          ele.num = item.num
        }
        if (ele.num <=0){
          selectedCook.splice(index,1)
        }
      })
      app.changeCook(selectedCook)
      app.changePrice()
      selectedCook.map(ele => {
        total += ele.num
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
    }
  }
})
