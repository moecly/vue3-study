<template>
    <div>
        <p class="active">hello</p>
        <p :class="{active:isActive}">hello1</p>
        <p :class="{active:isActive, helloworld:isActive}">hello1</p>
        <button @click="isActive=!isActive">change active</button>
        <!-- 和普通的类可同时存在 -->
        <p :class="{active:isActive}" class="helloworld">hello1</p>
        <p :class="classObj">hello1</p>
        <p :class="classObjCom">computed</p>
        <!-- 数组语法，不常用 -->
        <p :class="[message, activeClass]">hello2</p>
        <!-- 数组和对象结合 -->
        <p :class="[message, {active: isActive}]">hello3</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "helloworld",
            activeClass: "active",
            isActive: "true",
            error: null,
            classObj: {
                active: true,
                helloworld: true,
            },
        };
    },

    computed: {
        classObjCom() {
            return {
                active: this.isActive && !this.error,
                helloworld: this.error,
            }
        },
    
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>

.active {
    font-size: 50px;
    color: blue;
}
.helloworld {
    background-color: pink;
}

</style>