const baseUrl = 'http://10.100.64.58'

export default ({url, method = 'GET', data = {}}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      header: {
        'content-type': 'application/json'
      },
      data: data,
      method: method,
      success: (res) => {
        if(res.data.code==0){
          resolve(res.data.data)
        }else{
          wx.showLoading(res.data.message)
          setTimeout(() => {
            wx.hideLoading()
          }, 3000)
        }
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