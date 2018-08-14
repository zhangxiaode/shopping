//index.js
import { cookList } from '../../utils/cookList.js'

Page({
  data: {
    cookList
  },
  changeNum() {
    console.log(111, cookList)
  },
  onShow() {
  },
  onHide() {
    this.setData({ cookList })
  }
})
