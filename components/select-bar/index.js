Component({
  properties: {
    options: {
      type: Array,
      value: [],
      observer(options){
        this.setData({
          current: options[0]||''
        })
      }
    },
    title:{
      type:String,
      value:''
    }
  },
  data: {
    isShow: false,
    current: {},
  },
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

    optionTap(e) {
      let { current } = this.data;
      const selected = e.target.dataset.item;
      if(current.name === selected.name){
        this.close();
        return;
      }
      current = selected;
      this.setData({ current,isShow: false});
      // 调用父组件方法，并传参
      this.triggerEvent('select', current);
    },

    openClose() {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    // 点击蒙层收起菜单
    close() {
      this.setData({
        isShow: false
      })
    },

    /**
     * 蒙层滑动捕获
     * @param {*} e
     */
    handleTouchmove: function(e) {

    },
  },

  lifetimes: {
    ready: function () {
      this.setNavSize();
    },
  },
})
