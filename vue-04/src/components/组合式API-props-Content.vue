<template>
    <div>
        <!-- <h2>{{props}}</h2> -->
        <h2>{{message}}</h2>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
import { ref, reactive, toRefs, onUpdated, toRef } from 'vue'
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

    props: {
        message: {
            type: String,
            default: "你好"
        },
        a: {
            type: Number,
            default: 0
        }
    },
    
    setup(props) {
        const info = reactive({
            name: "mjj",
            age: 18
        })
        const name = toRef(info, 'name')
        console.log(props.message);
        /** 
         * toRef是把一个属性转为ref
         * toRefs是把所有属性转为ref
         */
        const message = toRef(props, 'message')
        // const { message } = toRefs(props)
        console.log(message.value);
        onUpdated(()=>{
            console.log(message.value);
        })
        return { message, name }
    }
};
</script>

<style scoped>

</style>