//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
  },
  startRecord() {
    // console.log(this.pusher)
    // this.pusher.start()
    // this.player.play()
    // wx.chooseVideo({
    //   maxDuration: 10,
    //   success: function (res1) {
    //     app.startOperating("上传中")
    //     // 这个就是最终拍摄视频的临时路径了
    //     var tempFilePath = res1.tempFilePath;
    //   },
    //   fail: function () {
    //     console.error("获取本地视频时出错");
    //   }
    // })
  },
  endRecord() {
  },
  onLoad: function () {
    setTimeout(()=>{
      wx.switchTab({
        url: '../index/index'
      })
    },1000)

    // wx.authorize({
    //   scope: 'scope.userInfo'
    // })
    // this.pusher = wx.createLivePusherContext('pusher')
    // this.player = wx.createLivePusherContext('player')

    // wx.startRecord()
  }
})
