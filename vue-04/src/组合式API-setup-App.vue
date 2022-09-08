<template>
    <div>
        <h2>{{message}}</h2>
        <h2>{{a}}</h2>
        <h2>{{b}}</h2>
        <button @click="addB">add b</button>
    </div>
</template>

<script setup>
/* 引入组件不需要注册 */
import Content from '@/components/Content.vue';
/* 定义响应式变量，还是需要从vue引入 */
import { ref, reactive } from "vue";
/* 定义变量不需要暴露出去，可在模板直接使用 */
const a = 10
const b = ref(20)
const message = "helloworld"
function addB() {
    ++b.value
}
</script>