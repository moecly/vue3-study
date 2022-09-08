<template>
    <!-- v-if -->
    <div>
        <p v-if='age>=18'>我是成年人</p>        
        <p v-if='age==18'>我今天正好18岁</p>
        <p v-else='age<18'>我还是小朋友</p>
    </div>
    <template v-if='age>=18'>
        <div>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
        </div>
    </template>
    <!-- v-show -->
    <p v-show="sex=='man'">男生</p>
    <p v-show="sex=='woman'">女生</p>

    <!-- v-if 为 false 不渲染 -->
    <!-- v-show 一直渲染 -->
    <p v-if='isShow'>标题内容1-v-if</p>
    <p v-show='!isShow'>标题内容2-v-show</p>
    <button @click="isShow=!isShow">change show</button>
</template>

<script>
export default {
    data() {
        return {
            age: 17,
            sex: 'man',
            isShow: true,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>

</style>