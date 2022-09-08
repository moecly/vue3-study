<template>
    <div>
        <h2>About</h2>
        <button @click="goBack">back</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goBack() {
    /* 前进为正数，后退为负数 */
    /* back() = go(-1)   forword() = go(1) */
    router.go(-1)
}

</script>