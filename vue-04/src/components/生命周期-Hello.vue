<template>
    <div>
        <h2>{{message}}</h2> 
        <button @click="message='hello'">change message</button>
    </div>
</template>

<script>
export default {
    name: 'StudyVue3Hello',

    data() {
        return {
            message: "helloworld"
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    // beforeCreate() {
    //     console.log('beforeCreate')
    // },
    // created() {
    //     console.log('created')
    // },
    // beforeDestroy() {
    //     console.log('beforeDestroy')
    // },
    // destroyed() {
    //     console.log('destroyed')
    // },
    // beforeMount() {
    //     console.log('beforeMount')
    // },
    // mounted() {
    //     console.log('mounted')
    // },
    // beforeUpdate() {
    //     console.log('beforeUpdate')
    // },
    // updated() {
    //     console.log('updated')
    // },
    // beforeUnmount() {
    //     console.log('beforeUnmount')
    // },
    // unmounted() {
    //     console.log('unmounted')
    // }
};
</script>