<template>
    <div>
        <!-- $event事件对象 -->
        <h2 @click="addCounter()">{{counter}}</h2>
        <!-- 对象是数字5 -->
        <h2 @click="addCounter(5)">{{counter}}</h2>
        <!-- 对象是数字5和$event事件对像 -->
        <h2 @click="addCounter(5, $event)">{{counter}}</h2>
        <!-- 一个事件绑定多个处理函数 -->
        <h2 @click="addCounter(5), addAge()">{{counter}}--->{{age}}</h2>
        <!-- 事件修饰符 -->
        <!-- .stop阻止事件冒泡 -->
        <div @click="divClick()">
            <button @click.stop="btnClick">button</button>
        </div>
        <!-- .prevent阻止默认行为 -->
        <form action="">
            <input type="submit" value="submit" @click.prevent="submitClick()">
        </form>
        <!-- .once只触发一次 -->
        <button @click.once="submitClick()">once</button>
        <!-- .{keyCode（键盘编码） | keyAlias（键盘的简写）监听键盘的某个键帽} -->
        <input type="text" @keyup.enter="keyUp()">
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,           
            age: 7,
        };
    },

    mounted() {
        
    },

    methods: {
        addCounter(val) {
            this.counter += val;
        },
        addAge() {
            this.age++;
        },
        divClick() {
            console.log("父元素");
        },
        btnClick() {
            console.log("子元素");
        },
        submitClick() {
            console.log("submit success");
        },
        keyUp() {
            console.log("data submit success");
        }
    },
};
</script>

<style></style>