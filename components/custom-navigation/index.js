Component({
  properties: {
    // top:{
    //   type:Number,
    //   value:20
    // }
  },
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setNavSize: function() {
      let stateHeight = 0;		//  接收状态栏高度
      wx.getSystemInfo({
        success(res) {
          stateHeight = res.statusBarHeight;
        }
      })
      //let navHeight = wx.getMenuButtonBoundingClientRect().height;	//  获取胶囊高度
      //let top = 0;
      //top = wx.getMenuButtonBoundingClientRect().top -stateHeight;	//  获取top值
      //然后将取到的值返回在data里面
      this.setData({
          //navHeight: navHeight + top*2,		//  导航栏高度
          stateHeight: stateHeight			//  状态栏高度
        })
    },

    goBack: function() {
      wx.navigateBack({
        delta: 0,
      })
    },

    search: function() {
      this.triggerEvent('search');
    },

    inputValue: function(e) {
      this.triggerEvent('input',e.detail.value);
    },
  },

  lifetimes: {
    ready: function () {
      this.setNavSize();
    },
  },
})
