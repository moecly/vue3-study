<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="changeMsg()">change msg</button>
        <!-- 模板会自动解析value值，不需要counter.value -->
        <h2>{{counter}}</h2>
        <button @click="changeCounter()">change counter</button>
        <h2>{{name}}</h2>
        <button @click="changeObjName">change obj name</button>
        <h2>{{children.name}}</h2>
    </div>
</template>

<script>
import Content from '@/components/Content.vue';
import { ref, reactive, toRefs } from 'vue';
export default {
    name: 'StudyVue3App',

    data() {
        return {
            message: "helloworld"
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    /** 
     * 组合式api，将同一个逻辑关注点相关代码收集到一起
     * 不要使用this，会找不到组件实例
     */
    setup() {
        console.log('setup');
        
        /* 没有响应式 */
        let msg = "hello";
        console.log(msg);
        function changeMsg() {
            msg = "nihao";
            /* 不是响应式数据 */
            console.log(msg);
        }
        
        /* 通过ref定义响应式数据 */
        /* ref()是一个函数，返回带有value的对象 */
        /* 引用方式响应数据 */
        const counter = ref(0)
        function changeCounter() {
            counter.value++
        }

        /* 通过reactive定义引用类型数据 */
        const obj = reactive({
            name: "张三",
            age: 18,
            children: {
                name: "小张"
            }
        })

        function changeObjName() {
            obj.name = "李四"
        }

        let {name, children} = toRefs(obj)

        /* 把要用的数据和函数暴露出去 */
        /* ES6扩展运算符...obj这种方式没有响应式 */
        /* toRefs(object)使解析后的数据重新获得响应式 */
        return {msg, changeMsg, counter, changeCounter, changeObjName, ...toRefs(obj), name, children};
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    components: { Content },
};
</script>

<style scoped>

</style>