<template>
    <div>
        <!-- v-model的基本使用 -->
        <input type="text" v-model="msg">
        <h2>{{msg}}</h2>
        
        <!-- v-model原理，反向绑定msg -->
        <input type="text" :value="msg" @input="changeValue">
        <!-- 复选框 -->
        <!-- 单个勾选框，v-model为布偶值 -->
        <input type="checkbox" v-model="checked">
        <h1>{{checked}}</h1>
        <!-- 多个勾选框 -->
        <input type="checkbox" v-model="fruits" value="苹果">苹果
        <input type="checkbox" v-model="fruits" value="梨子">梨子
        <input type="checkbox" v-model="fruits" value="荔枝">荔枝
        <input type="checkbox" v-model="fruits" value="西瓜">西瓜
        <input type="checkbox" v-model="fruits" value="哈密瓜">哈密瓜
        <h2>喜欢的水果：{{fruits}}</h2>
        <!-- 单选框 -->
        <input type="radio" v-model="sex" value="男">男
        <input type="radio" v-model="sex" value="女">女
        <h2>{{sex}}</h2>
        <!-- 选项框 -->
        <!-- 单选 -->
        <select name="" id="" v-model="city">
            <option value="张家界">张家界</option>
            <option value="长沙">长沙</option>
            <option value="益阳">益阳</option>
            <option value="昭阳">昭阳</option>
        </select>
        <h2>{{city}}</h2>
        <!-- 多选 -->
        <select name="" id="" v-model="citys" multiple>
            <option value="张家界">张家界</option>
            <option value="长沙">长沙</option>
            <option value="益阳">益阳</option>
            <option value="昭阳">昭阳</option>
        </select>
        <h2>{{citys}}</h2>
        <!-- 修饰符的使用 -->
        <!-- .lazy失去焦点后再进行同步 -->
        <input type="text" v-model.lazy="msg">
        <h2>{{msg}}</h2>
        <!-- .number将输入框中的内容自动转换成数字类型 -->
        <input type="text" v-model.number="counter">
        <h2>{{typeof counter}}</h2>
        <!-- .trim自动过滤用户首位输入的空白字符 -->
        <input type="text" v-model.trim="msg" @keydown="downmsg">
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            msg: "helloworld",
            checked: true,
            fruits: [],
            sex: "男",
            city: "张家界",
            citys: [],
        };
    },

    mounted() {
        
    },

    methods: {
        changeValue(e) {
            console.log(e);
            this.msg = e.target.value;
        },
        downmsg() {
            console.log(this.msg);
        }
    },
};
</script>

<style></style>