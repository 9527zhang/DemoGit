// components/filter/filter.js
let pageY = 0;
Component({

    options: {
        styleIsolation: 'isolated'
    },

    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        selectType: {
            type: Number,
            value: 0
        },
        selectDegree: {
            type: Number,
            value: 3
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        animate: {},
        hideModal: false,
        mb: 24
    },

    observers: {
        'show': function(val) {
            if (val) {
                this.showModal()
            } else {
                this.hideModal()
            }
        }
    },

    attached() {
        this.setData({
            mb: wx.getSystemInfoSync().safeArea.top == 20 ? 24 : 72
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showModal() {
            this.setData({
                hideModal: true
            })
            const animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease'
            })
            //  先把背景加载出来，再执行动画，translateY(0) 默认高度
            setTimeout(() => {
                animation.translateY(0).step()
                this.setData({
                    animate: animation.export()
                })
            }, 50)
        },

        hideModal() {
            const animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease'
            })
            animation.translateY('100vh').step()
            this.setData({
                animate: animation.export()
            })

            setTimeout(() => {
                this.setData({
                    hideModal: false
                })
            }, 300);
        },
        chooseType(e) {
            let index = e.currentTarget.dataset.index;
            this.setData({
                selectType: Number(index)
            })
        },
        chooseDegree(e) {
            let index = e.currentTarget.dataset.index;
            this.setData({
                selectDegree: Number(index)
            })
        },
        reset() {
            this.setData({
                selectType: 0,
                selectDegree: 3,
            })
        },
        startPractice() {
            this.triggerEvent('filter', { chooseType: this.data.selectType, chooseDegree: this.data.selectDegree })
            this.hideModal()
        },
        preventTouchMove() {
            return;
        }
    }
})
