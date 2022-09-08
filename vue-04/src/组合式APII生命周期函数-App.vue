<template>
    <div>
        
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
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

    setup() {
        onBeforeMount(()=>{
            console.log("onBeforeMount");
        })
        onMounted(()=>{
            console.log('onMounted')
        })
        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })
        onUpdated(()=>{
            console.log('onUpdated')
        })
    }
};
</script>

<style scoped>

</style>