<template>
    <div>
        <!-- <h2>{{counter}}</h2>
        <h2>{{uer.name}}</h2>
        <button @click="changeCounter">change counter</button>
        <button @click="changeUerName">change uer name</button> -->
        <h2>{{msg}}</h2>
        <button @click="msg=reverseMsg">reverse msg</button>
    </div>
</template>

<script>
import { ref, reactive, watch, watchEffect, computed } from 'vue'
export default {
    name: 'StudyVue3App',

    data() {
        return {
            message: "helloworld",
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    /** 
     * 组合式API
     */
    setup() {
        // const counter = ref(0)
        const msg = ref("helloworld")
        const reverseMsg = computed(()=>{
            return msg.value.split('').reverse().join('')
        })
        

        // const msg=ref("helloworld").value.split('').reverse().join('')

        // function changeCounter() {
        //     ++counter.value
        // }

        const uer = reactive({
            name: "张三",
            age: 18,
            reverseMsg: computed(()=>{
                return msg.value.split('').reverse().join('')
            })
        })
        // function changeUerName() {
        //     uer.name = "李四"
        // }

        /** 
         * watch(侦听的响应式数据, 回调函数)
         */
        // watch(counter, (newVal, oldVal)=>{
        //     console.log(oldVal)
        //     console.log(newVal)
        // })

        // watch(uer, (newVal, oldVal)=>{
        //     console.log(oldVal)
        //     console.log(newVal)
        // })

        /** 
         * watchEffect(回调函数)
         * 注意不需要指定监听的属性，组件初始化自动执行一次，自动收集依赖 
         */
        // watchEffect(()=>{
        //     console.log(uer.name)
        // })

        /** 
         * watch和watchEffect区别
         * 1、watchEffect不需要指定监听属性
         */

        // return { counter, uer, changeCounter, changeUerName, msg };
        return { msg, reverseMsg }
    },

    /** 
     * 选项式API
     */
    // watch: {
    //     message(newValue, oldValue) {
            
    //     },
    // },

    /** 
     * 选项式API
     */
    // computed: {
    //     reverseMsg() {
    //         return this.msg.split('').reverse().join('')
    //     },
    
    // },

};
</script>

<style scoped>

</style>