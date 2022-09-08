<template>
    <div>
        <h2>我是content组件</h2>
        <button @click="sendParent">send parent</button>
    </div>
</template>

<script>
import { ref, reactive, h } from 'vue'
export default {
    name: 'StudyVue3Content',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    /** 
     * context不是响应式的，可以用ES6表达式安全使用
     * setup(props, { attribute, emit, slots, expose })
     */
    setup(props, context) {
        /* attribute */
        // // console.log(context.attrs);
        /* 触发事件 */
        // console.log(context.emit);
        /* 插槽 */
        // console.log(context.slots);
        /* 暴露公共property */
        // console.log(context.expose);
        const counter = ref(20)
        function sendParent() {
            context.emit('injectCounter', counter)
        }
        // return { sendParent }
        
        /* 返回了一个渲染函数，而不是对象，这种情况就要用到espose把需要传给parent的值传进去 */
        context.expose({
            sendParent, counter
        })
        return () => h('div', counter.value)
    }
};

</script>

<style scoped>

</style>