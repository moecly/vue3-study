<template>
    <div>
        <p v-for="item in list" key="item">{{item}}</p>
        <!-- 尾部添加 -->
        <div>
        <button @click="list.push(7)">push</button>
        </div>  
        <!-- 尾部删除 -->
        <div>
        <button @click="list.pop()">pop</button>
        </div>
        <!-- 头部增加 -->
        <div>
        <button @click="list.shift(7)">shift</button>
        </div>
        <!-- 头部删除 -->
        <div>
        <button @click="list.unshift(7)">unshift</button>
        </div>
        <!-- 在第一个变量的索引删除第二个变量个数的元素，list.splice(1,0,1,2,3)，也可以添加1，2，3这三个元素 -->
        <div>
        <button @click="list.splice(1,2)">splice</button>
        </div>
        <!-- 排序列表 -->
        <div>
        <button @click="list.sort()">sort</button>
        </div>
        <!-- 翻转列表 -->
        <div>
        <button @click="list.reverse()">reverse</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[1, 2, 3],
        };
    },

    mounted() {
        
    },

    methods: {
    },
};
</script>

<style></style>