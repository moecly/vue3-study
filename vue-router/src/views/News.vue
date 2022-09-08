<template>
    <div>
        News
    </div>
</template>
<script>
export default {
    data() {
        return {
            age: 18,
        };
    },
    beforeRouteEnter (to, from, next) {
        console.log(from);
        console.log(to);

        /* 不能通过this获得data属性，要通过next的回调函数 */
        // console.log(this.age);
        next((vm)=>{
            // console.log(vm.age);
            console.log(vm.age);
        })
        console.log("路由进入组件之前");
    }, 
    beforeRouteUpdate (to, from, next) {
        console.log(from);
        console.log(to);
        next()
        console.log("路由更新组件之前");
    },
    beforeRouteLeave (to, from, next) {
        console.log(from);
        console.log(to);
        next()
        console.log("路由离开组件之前");
    }
}

</script>

<!-- <script setup>
import { onBeforeRouteUpdate } from 'vue-router';

</script> -->