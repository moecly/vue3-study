<template>
    <div>
        <Content></Content>   
        <button @click="changeMsg">change message</button>
        <button @click="obj.message='hello'">change message</button>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
import Content from '@/components/Content.vue';
export default {
    name: 'StudyVue3HelloView',

    data() {
        return {
            message:"helloworld",
            obj: {
                message: "helloworld"
            }
        };
    },

    mounted() {
        
    },

    methods: {
        changeMsg() {
            this.message="hello";
            console.log(this)
        } 
    },

    /** 
     * provide/inject并不是响应式
     * 如果想去访问组件实例对象要用函数返回
     */
    // provide: {message: 'helloworld'},
    provide() {
        return {
            // message: this.message,
            /* 响应式浅拷贝 */
            // obj: this.obj
            /* 函数返回响应式数据 */
            message:()=>this.message
        }
    },

    components: { 
        Content
    },
};
</script>

<style></style>