<template>
    <div>
        <h2>{{store.state.msg}}</h2>
        <button @click="store.updateMsg">update msg</button>
    </div>
</template>

<script>
export default {
   inject:[
        'store'
   ],
   methods: {
   },
}
</script>
<!-- <script setup>
import { inject } from 'vue'
</script> -->

<style lang="scss">
</style>