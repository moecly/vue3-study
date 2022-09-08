<template>
    <div>
        User
        {{}}
    </div>
</template>

<!-- <script>
export default {
    props: ['id'],
    mounted() {
        /* get id */
        console.log(this.$route.params.id);
        console.log(this.id);
    },
}
</script> -->

<script setup>
/* 返回route，可以通过useroute().params.id得到动态id值 */
import { useRoute } from 'vue-router';
import { ref, reactive } from 'vue'
const route = useRoute()
const props = defineProps({
    id: String,
})
console.log(route.params.id);
console.log(props.id);
</script>