<template>
    <div>
        <h2>这是test组件</h2>
        <!-- <h2>{{message()}}</h2> -->
        <!-- <h2>{{obj.message}}</h2> -->
        <h2>{{newMsg}}</h2>
    </div>
</template>

<script>
export default {
    name: 'StudyVue3Test',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    computed: {
        newMsg() {
            return this.message();
        },
    
    },

    inject: ['message'],
    // inject: ['obj'],
};
</script>