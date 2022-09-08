<template>
    <div>
        <Hello v-show="isShow"></Hello>
        <button @click="isShow=!isShow">change isShow</button>
    </div>
</template>

<script>
import Hello from '@/components/Hello.vue';
export default {
    // name: 'StudyVue3App',

    data() {
        return {
            isShow: true
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    components: { Hello },
};
</script>

<style></style>