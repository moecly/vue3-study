<template>
    <div>
        <!-- 放置字符串 -->
        <p style="color:red">hello</p>   
        
        <!-- 放置对象 -->
        
        <!-- 驼峰式或短横线分割，用引号括起来 -->
        <p 
            :style="{
                color:activeColor,
                fontSize:fontSize,
                'background-color':bgcColor
            }">
            hello2
        </p>  

        <p :style="styleObj">hello3</p>
        
        <!-- 数组形式 -->
        <!-- 边框样式 -->
        <p :style="[styleObj, {border: '5px solid blue'}]">hello4</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeColor: 'red',
            fontSize: '50px',
            bgcColor: 'pink',
            styleObj:{
                color: 'red',
                fontSize: '50px',
                'background-color': 'pink',
            },
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style></style>