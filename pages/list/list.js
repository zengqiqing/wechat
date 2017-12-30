// pages/list/list.js
const fetch =require("../../utils/util.js");
Page({

  data: {
    category: {},
    shops: [],
    pageIndex:0,
    pageSize:0,
    hasmore:true
  },
// 定义“加载”的方法
loadMore(){
  let {pageSize,pageIndex}=this.data;
  const params={_page:++pageIndex,_limit:pageSize};
    // url: "https://locally.uieee.com/categories/"+options.cat + "/shops" + "?_page=1&_limit=10",
  fetch(`categories/${this.data.category.id}/shops`,params).then(
    res=>{
      const shops = this.data.shops.concat(res.data);
      if(res.data.length<1){
        this.setData({        
          hasmore:false,          
        }) 
        
      }
      this.setData({
        shops:res.data,
        pageIndex:pageIndex,
        shops:shops
      })
    }
  )
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // console.log(options);
  //  wx.request({
  //    url: "https://locally.uieee.com/categories/" +options.cat,
  //   success:res=>{
  //     // console.log(res);
  //     this.setData({
  //       category:res.data,
  //     }),
  //       wx.setNavigationBarTitle({
  //         title: this.data.category.name,
  //       })

  //   }
  //  }),
      // 封装categories
      fetch(`categories/${options.cat}`).then(res => {
        this.setData({
          category: res.data,
        })
        wx.setNavigationBarTitle({
          title: this.data.category.name,
        })
        this.loadMore();
      });
 
  },

  //  wx.request({
  //    url: "https://locally.uieee.com/categories/"+options.cat+"/shops"+"?_page=1&_limit=10",
  //    success:res=>{
  //      console.log(res);
  //     this.setData({
  //       shops:res.data
  //     })
  //    }
  //  })
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.category.name){
      wx.setNavigationBarTitle({
        title: this.data.category.name,
      })
    }   
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})