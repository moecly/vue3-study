<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  data() {
    return {
      num:0,
      uname:'张三',
      msg:'<h2>标题</h2>',
      id:"d1",
      url:"https://gitlab.com/moecly77/moecly-blog-images-repo/-/raw/main/avatar.jpg",
      attributeName:"id",
      mouseEvent:"click",
    }
  },
  methods: {
    changeUname() {
      this.uname='李四'
    },
    changeColor() {
      this.id = "d2"
    },
  },
}
</script>

<template>
  <div>
    <p>{{num}}</p>
    <p>{{uname}}</p>
    <p v-once>{{uname}}</p>
    <p v-html="msg"></p>
    <p v-bind:id="id">v-bind</p>
    <button @click="changeUname">改变名字</button>
    <button @click="changeColor">改变颜色</button>
    <img v-bind:src="url" alt="">
    <p>{{num+1}}</p>
    <p>{{uname.split('').reverse().join('')}}</p>
    <p v-bind:id="id+1">v-bind</p>
    <p :id="id">v-bind</p>
    <button v-on:click="changeColor">改变颜色</button>

    <!-- 动态属性 -->
    <p :[attributeName]="id">v-bind</p>
    <button @click="attributeName='class'">改变属性</button>

    <!-- 动态事件 -->
    <button @[mouseEvent]="attributeName='class'">改变属性</button>

    <!-- 改变事件 -->
    <button @click="mouseEvent='mouseover'">改变事件</button>

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
#d1 {
  color:red;
}
#d2 {
  color:blue;
}
.d1 {
  font-size: 50px;
}
</style>
