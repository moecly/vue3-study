<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<script>
export default {
  data() {
    return {
      message: "helloworld",
      age: 0,
    }
  },
  computed: {
    /** 
     * 函数简写
     */
    // reverseMsg() {
    //   /* 依赖值不变，不会重新计算，多次执行只会计算一次 */
    //   console.log("计算属性");
    //   return this.message.split('').reverse().join('');
    // },

    /** 
     * 函数完整写法
     */
    reverseMsg:{
      get() {
        return this.message.split('').reverse().join('');
      },
      /** 
       * 计算属性一般没有set
       */
      set(newVal) {
        this.message = newVal;
      }
    },

  },
  methods: {
    reverseMessage() {
      console.log("methods");
      return this.message.split('').reverse().join('');
    },
  },
}
</script>

<template>
  <div>
    <p>{{message}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
    <p>{{reverseMsg}}</p>
    <p>{{reverseMsg}}</p>
    <p>{{reverseMsg}}</p>
    <p>{{reverseMessage()}}</p>
    <p>{{reverseMessage()}}</p>
    <p>{{reverseMessage()}}</p>
    <button @click="message='你好'">改变信息</button>
    <button @click="reverseMsg='hello'">改变reverse信息</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
