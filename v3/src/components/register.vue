<template>
  <div id="register">
    <h1>注册</h1><br>
    邮箱:<input type="email" v-model="email" /><br />
    昵称:<input type="text" v-model="name" /><br />
    密码:<input type="text" v-model="password" /><br />
    <button @click="register">登录</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import axios from "../axios"
export default {
  name: "register",
  setup() {
    let userInfo = reactive({
      email: "",
      name: "",
      password: "",
    });
    async function register() {
      const { data } = await axios.post("/users/register", userInfo);
      console.log(data);
    }

    return {
      ...toRefs(userInfo),
      register,
    };
  },
};
</script>

<style scoped>
#register *{
  margin: 20px;
}
</style>