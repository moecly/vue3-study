<template>
    <div>
        <Content><button>button</button></Content>
        <Content><input type="text"></Content>
        <!-- 如果有多个值同时进行组件替换，一起作为替换元素 -->
        <!-- <Content><button>button</button><input type="text"><h2>插槽</h2></Content> -->
        <Content>
            <!-- v-slot只能再templata上 -->
            <!-- 父模板所有内容作用域在父级，子模板所有内容作用域在子级 -->
            <template v-slot:button><button>button</button></template>
            <template v-slot:input><input type="text"></template>
            <template v-slot:h2><h2>插槽</h2></template>
        </Content>
        <p>---------------------------------------------------------------</p>
        <!-- 作用域插槽，父组件替换标签，但是数据由子组件提供 -->
        <!-- 包含所有插槽prop的对象命名为slotProps，可自定义名字 -->
        <!-- 无序列表 -->
        <Content>
            <template v-slot:paixu="slotProps">
                <ul>
                    <li v-for="item in slotProps.list" :key="item">{{item}}</li>
                </ul>
            </template>
        </Content>
        <!-- 有序列表 -->
        <Content>
            <template v-slot:paixu="slotProps">
                <ol>
                    <li v-for="item in slotProps.list" :key="item">{{item}}</li>
                </ol>
            </template>
        </Content>
    </div>
</template>

<script>
import Content from './components/Content.vue'
export default {
    data() {
        return {
            list: []
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    components: { 
        Content  
    },
};
</script>

<style></style>