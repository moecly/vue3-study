<template>
    <div>
        <!-- <Content class="box" id="content" @injectCounter="injectCounter"></Content>         -->
        <!-- ref接收expose -->
        <Content class="box" id="content" ref="content" @injectCounter="injectCounter"></Content>        
        <h2></h2>
    </div>
</template>

<script>
import Content from '@/components/Content.vue';
export default {
    name: 'StudyVue3App',

    data() {
        return {
            
        };
    },

    mounted() {
        console.log(this.$refs.content);
        this.$refs.content.sendParent()
    },

    methods: {
        injectCounter(value) {
            console.log("injectCounter---------->" + value.value);
        }
    },

    components: { Content },
};
</script>

<style scoped>

</style>