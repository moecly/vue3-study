<template>
    <div><Home></Home></div>
</template>

<script setup>
import store from './store'
import Home from './views/Home.vue';
import { provide } from 'vue'
provide('store', store)
</script>

<style lang="scss">
</style>