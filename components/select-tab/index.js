Component({
  properties: {
    selectTab: {
      type: Object,
      value: {}
    },
    options: {
      type: Array,
      value: []
    },
  },

  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectTab: function(e) {
      this.triggerEvent('select',e.currentTarget.dataset.item);
    },
  },
})
