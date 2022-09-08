<template>
    <div>
        hello
        <h2>{{message}}</h2>
        <!-- <h2>{{aaa}}</h2> -->
        <h2>{{list}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
             
        };
    },

    mounted() {
        console.log(this.$parent)
    },

    methods: {
        
    },
    /* 字符串数组 */
    // props:['message'] 

    /* 对象 */
    props: {
        /* 1.类型的限制 */
        // message: String,
        /* 2.除了类型限制，还可以设置默认值，必须值 */
        message: {
            type: String,
            default: "你好",
            required: true,
        },
        // aaa: {
        //     type: var,
        //     default: 0,
        // },
        list: {
            type: Array,
            /* 对象或数组由函数方式返回 */
            default() {
                return [];
            },
        }
    }
};
</script>