<template>
  <div id="login">
    <h1>登录</h1>
    <br />
    <h2 v-show="name">用户名{{name}}</h2><br>
    邮箱:<input type="email" v-model="email" /><br />
    密码:<input type="text" v-model="password" /><br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import axios from "../axios";
export default {
  name: "login",
  setup() {

    let name = ref()
    let userInfo = reactive({
      email: "",
      password: "",
    });
    async function login() {
      const { data } = await axios.post("/users/login", userInfo);
      console.log(data);
      name.value = data.name
    }

    return {
      ...toRefs(userInfo),
      name,
      login,
    };
  },
};
</script>

<style scoped>
#login * {
  margin: 20px;
}
</style>