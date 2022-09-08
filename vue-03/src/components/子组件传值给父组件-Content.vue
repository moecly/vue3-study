<template>
    <div>
        <h2>我是content组件内容</h2>
        <div>
            <!-- 默认值 -->
            <!-- <slot name="button"><button>默认按钮</button></slot>
            <slot name="input"></slot>
            <slot name="h2"></slot> -->
            <slot :list="list" :message="message" name="paixu"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [1,2,3,4],
            message: "你好"
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>