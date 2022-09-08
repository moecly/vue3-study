<template>
    <div>
        <!-- v-for使用数组，item表示数组中的每个元素，index表示数组元素的下标 -->
        <ul>
            <li v-for='item in person' :key='item'>{{item}}</li>
        </ul>
        <ul>
            <li v-for='(item, index) in person' :key='index'>{{item}}-->{{index}}</li>
        </ul>
        <ul>
            <li v-for='(item, index) of person' :key='index'>{{item}}-->{{index}}</li>
        </ul>
        <!-- v-for使用对象，item表示键值，key表示键名，index表示键值的索引 -->
        <ul>
            <li v-for='item in personObj' :key='item'>{{item}}</li>
            <li v-for='(item, key, index) in personObj' key='key' index="index">{{item}}-->{{key}}-->{{index}}</li>
            <!-- <button @click='changeItem'>change item</button> -->
        </ul>
        <!-- key给列表项添加唯一标识，如果没有key在数组索引变化的情况下复选框所选择的也会改变 -->
        <!-- key跟踪每个节点，快速找到节点，减少渲染次数，提高渲染性能 -->
        <!-- 类似与链表一对一 -->
        <ul>
            <li v-for="item in person" :key="item"><input type="checkbox" name="" id="">{{item}}</li>
            <button @click="changeItem()">add item</button>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            person:['张三','李四','王五'],
            personObj:{
                name:'张三',
                age:18,
                sex:'男'
            },
        };
    },

    mounted() {
        
    },

    methods: {
        // changeItem:{
            // get() {
            //     this.person.unshift('赵六');
            //     return this.personObj;
            // },
            // set() {
            //     this.personObj.name="李四";
            // },
        // },
        changeItem(){
            this.person.unshift('赵六');
        }
    },
};
</script>

<style></style>