<script>
export default {
    data() {
        return {
            message: "helloworld",
            age: 0,
            user:{
                name: "张三",
                age: 18,
                sex: "男",
            },
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    
    /** 
     * 监听值是否改变
     */
    watch: {
        
        /** 
         * 简写
         */
        // message(newValue, oldValue) {
        //     console.log(newValue)
        //     console.log(oldValue)
        // },
        
        /** 
         * 复杂
         */
        message: {
            /* 初始化时调用函数 */
            immediate: true,
            handler(newValue, oldValue) {
                console.log(newValue);
                if (newValue.length < 5 || newValue.length > 10) {
                    console.log("输入框长度不能小于5或大于10");
                }
            },
        },
    
        /** 
         * 监听不到对象的属性变化，需要使用深度监听
         */
        "user.name": {
            deep: true,
            handler(newValue) {
                console.log(newValue);
            }
        },
    },
};
</script>

<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ user.name }}</p>
        <button @click="message='你好'">change message</button>
        <button @click="user.name='李四'">change name</button>
        <input type="text" v-model="message">
    </div>
</template>