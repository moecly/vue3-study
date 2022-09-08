<template>
    <div>
        <h2>{{store.state.msg}}</h2>
        <button @click="store.updateMsg">update msg</button>
        <ul>
            <!-- <li v-for="item in bannersList" :key="item.targetId"><img src="item.imageUrl" alt=""></li> -->
            <!-- <li v-for="item in store.state.bannersList" :key="item.targetId"><img src="item.imageUrl" alt=""></li> -->
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
    return {
        bannersList: [],
    };
   },
   inject:[
        'store'
   ],
   created() {
    /** 
     * fetch获取数据
     * http://smartschoolmangersystem.free.idcfengye.com/sms/system/list
     */
//     fetch('http://smartschoolmangersystem.free.idcfengye.com/sms/system/list').then((res)=>{
//         /* json()将响应回来的body解析成json */
//         // console.log(res.json());
//         return res.json();
//     }).then((res)=>{
//         console.log(res);
//         // this.bannersList = res.banners
//         this.store.state.bannersList = res.banners
//         this.store.updateBannersList(res.banners)
//     })
        // axios: 基于promise的http库
        /** 
         * 跨域请求策略，浏览器有同源策略保护，通过proxy实现跨域请求数据
         */
        axios.get('/path/sms/system/list').then((res)=>{
            console.log(res.data);
            // return res.json();
        })
   },
   methods: {
   },
}
</script>
<!-- <script setup>
import { inject } from 'vue'
</script> -->

<style lang="scss">
</style>