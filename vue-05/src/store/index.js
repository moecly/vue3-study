/** 
 * 状态集中管理
 * 数据响应式
 */
import { ref, reactive } from 'vue'

const store = {
    state: reactive({
        msg: "helloworld",
        bannersList: []
    }),
    updateMsg:function() {
        this.state.msg = "你好"
    },
    updateBannersList:function(value) {
        this.state.bannersList = value
    }
}

export default store