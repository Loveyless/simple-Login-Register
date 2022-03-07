//引入的不是Vue构造函数了，是名为createApp工厂函数
//区别为一个小写，一个不用new
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



//创建应用实例对象-app(类似于vue2的vm，但是它更轻)
const app = createApp(App)


//注册路由      挂载
app.use(router).mount('#app')
