<template>
  <div class="app">
    <router-link to="login">登陆</router-link>
    <router-link to="register">注册</router-link>
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  name: "App",
  components: {},
};
</script>


<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>