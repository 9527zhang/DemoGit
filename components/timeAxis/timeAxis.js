// components/timeAxis/timeAxis.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isHeadTitle: {
      type: Boolean,
      value: true
    },
    axisTitle: {
      type: String,
      value: ''
    },
    content1: {
      type: String,
      value: ''
    },
    content2: {
      type: String,
      value: ''
    },
    isLast: {
      type: Boolean,
      value: false
    },
    index: {
      type: String,
      value: ''
    },
    isCurent:{
      type: Boolean,
      value: false
    },
    isShowLeftLine: {
      type: Boolean,
      value: true
    },
    axisTitle: {
      type: String,
      value: ''
    },
    axisTime:{
      type: String,
      value: ''
    },
    textArray:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    editTap(e) {
      let index = e.currentTarget.dataset.index
      this.triggerEvent('editTap', index)
    }
  }
})
