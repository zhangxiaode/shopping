Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    arrowData: Object
  },
  data: {
    arrowData: {
      showArrow: true,
      arrowL: '',
      arrowR: '',
      icon: false
    }
  },
  attached() {
    this.dataInit()
  },
  methods: {
    dataInit() {
      this.setData({
        showArrow: this.properties.arrowData.showArrow,
        arrowL: this.properties.arrowData.arrowL,
        arrowR: this.properties.arrowData.arrowR,
        icon: this.properties.arrowData.icon
      })
    }
  }
})
