<template>
  <div>
    <button @click="goPage">跳转页面</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
// import { onMounted } from 'vue'
    // onMounted(() => {
    //     console.log(useRouter());
    // }),
function goPage() {
    // console.log(useRouter);
    router.replace({
        path: '/about',
        query: {
            name: "zhangshan"
        }
    });
}
</script>

<!-- <script>
export default {
    methods: {
        goPage:function() {
            // console.log(this.$router);
            // this.$router.push('/')
            /* 通过传入对象 */
            // this.$router.push({path:"/"})
            /* 带参数 */
            // this.$router.push({path:"/user/123456"})
            /* 给一个名字带参传送 */
            // this.$router.push({name:"news", params:{id:123}})
            /* 带问号 */
            // this.$router.push({path:"/about", query:{name:"zhangshan"}})
            /* 替换当前位置，两种方法都可 */
            // this.$router.push({ 
            //     path: '/about',
            //     query: {
            //         name: "张三",
            //     },
            //     replace: true
            // });
            this.$router.replace({
                path: "/about",
                query:{
                    name: "zhangshan"
                }
            });
        }
    },
} -->
<!-- </script> -->

<style lang="scss">
</style>