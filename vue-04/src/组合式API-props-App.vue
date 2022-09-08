<template>
    <div>
        <Content :message="message"></Content>
        <button @click="message='hello'">change message</button>
    </div>
</template>

<script>
import Content from '@/components/Content.vue';
import { ref, reactive } from 'vue'

export default {
    name: 'StudyVue3App',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    components: { Content },

    setup() {
        const message = ref("helloworld")
        return { message }
    }
};
</script>

<style scoped>

</style>