<template>
    <div>
        <!-- 拿到子组件content的数据，通过自定义事件 -->
        <!-- 在父子件中，通过v-on监听子组件自定义事件 -->
        <Content @injectMsg="getChildMsg"></Content>
        <p>------------------------------</p>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
import Content from './components/Content.vue'
export default {
    data() {
        return {
            message: "",            
        };
    },

    mounted() {
        
    },

    methods: {
        getChildMsg(val) {
            console.log(val);
            this.message = val
        }        
    },

    components: { 
        Content:Content,
    },
};
</script>

<style></style>