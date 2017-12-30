// pages/demo/demo.js
const fetch=require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  "silides":[],
  "categories":[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`slides`).then(res=>{
      this.setData({
        slides: res.data,
      })    
    })
  // wx.request({
  //   url: "https://locally.uieee.com/slides",
  //   header:{
  //     "Content-Type":"json",
  //   },
  //   success:res=>{
  //     console.log(res),
  //       this.setData({
          
  //         slides:res.data,
  //       })    
  //   },   
  // }),
  // wx.request({
  //   url: 'https://locally.uieee.com/categories',
  //   success:res=>{
  //     console.log(res),
  //     this.setData({
  //       categories:res.data,
  //     })
  //   }
  // })
    fetch(`categories`).then(res=>{
        this.setData({
        categories:res.data,
    })
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})