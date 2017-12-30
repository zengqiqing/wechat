// // 对外导出每个不同的路径与数据
module.exports =function(url,data){
 let p= new Promise((resolve,reject)=>{
   wx.request({
     url: `https://locally.uieee.com/${url}`,
     data:data,
     success:resolve,
     fail:reject,
 })
})
 return p;
}