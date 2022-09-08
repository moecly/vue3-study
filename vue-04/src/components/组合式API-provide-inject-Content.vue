<template>
    <div>
        <h2>我是Content组件</h2>
        {{name}}
        <slot name="button"></slot>
    </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
    name: 'StudyVue3Content',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    setup() {
        const name = inject('name')
        return { name }
    },
};
</script>

<style scoped>

</style>