const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        wx.showLoading({
          title: '网络错误!'
        })
        setTimeout(() => {
          wx.hideLoading()
        }, 3000)
        reject(err)
      }
    })
  })
}
const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        wx.showLoading({
          title: '网络错误!'
        })
        setTimeout(() => {
          wx.hideLoading()
        }, 3000)
        reject(err)
      }
    })
  })
}
module.exports = {
  formatTime,
  getSetting,
  getUserInfo
}
