<template>
    <div>
        <h1>Hello App!</h1>
        <p><router-link to="/">Go to Home</router-link></p>
        <p><router-link to="/about">Go to About</router-link></p>
        <p><router-link to="/User/123">Go to User</router-link></p>
        <!-- <p><router-link to="/News/123">Go to News</router-link></p> -->
        <!-- 通过name访问 -->
        <p><router-link :to="{name:'news', params:{id:456}}">Go to News</router-link></p>
        <p><router-link to="/Parent">Go to Parent</router-link></p>
        <p><router-link to="/Page">Go to Page</router-link></p>
        <p><router-link to="/shop">Go to Shop</router-link></p>
        <router-view name="ShopTop"></router-view>
        <router-view></router-view>
        <router-view name="ShopFooter"></router-view>
    </div>
</template>

<script setup>

</script>