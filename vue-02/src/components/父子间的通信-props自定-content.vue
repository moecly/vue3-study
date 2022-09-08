<template>
    <div>
        <!-- 组件时带有名称的可复用的示例，单独功能模块的封装 -->
        <!-- 父组件访问子组件：$refs--开发中经常用到 $children--数组类型 -->
        <!-- ref:用来给子组件或元素注册引用信息 -->
        <!-- 子组件访问父组件：$parent -->
        <!-- 子组件访问根组件：$root -->
        <p>-----------------------------</p>
        <Hello :message="msg" :list="list" aaa="123" ref="hello"></Hello>
        <p>-----------------------------</p>


        <h2>我是content组件内容</h2>        
        <h2>{{msg}}</h2>
        <button @click="msg='hello'">change msg</button>
        <!-- <Hello></Hello> -->
        <p>-----------------------------</p>
        <button @click="sendParsent">提交数据给父子件</button>
    </div>
</template>

<script>
// const obj={
//     msg:"helloworld",
// }
import Hello from './Hello.vue'
export default {
    data() { // 让每个组件对象都返回一个新的对象，不会造成数据污染
        return {
            msg: "helloworld",
            list: [1,2,3,4],
        }
    },

    mounted() {
        console.log(this.$refs)
    },

    methods: {
        /* 在子组件通过$emit来触发事件 */
        sendParsent() {
            // this.$emit('自定的事件名称', '发送的时间参数')
            this.$emit('injectMsg', this.msg)
        }        
    },
    components: { 
        Hello
    },
};
</script>
