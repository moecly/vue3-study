<template>
    <div>
         <Content>
            <template v-slot:button>
                <div>
                <button @click="changeName">change name</button>
                </div>
            </template>
         </Content>   
         <!-- <button @click="changeName">change name</button> -->
    </div>
</template>

<script>
import Content from '@/components/Content.vue';
import { provide, ref, reactive } from 'vue'
export default {
    data() {
        return {
            
        };
    },

    mounted() {
    },

    methods: {
        // changeName() {
        //     this.name = "李四"
        //     console.log(this.name);
        // }
    },

    setup() {
        const name = ref("张三")
        provide('name', name)
        function changeName() {
            name.value = "李四"
            console.log(name.value);
        }
        return { name, changeName }
    },
    components: { Content },
};
</script>

<style scoped>

</style>