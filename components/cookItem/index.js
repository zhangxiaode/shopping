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
    this.dataInit();
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
    },
    handleMinus(event) {
      let item = this.data.item
      item.num--
      this.setData({ item })
    }
  }
})
