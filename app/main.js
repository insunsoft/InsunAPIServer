//引入核心对象
import Vue from 'vue'
import App from './App'

//自定义导航栏
import cuCustom from './colorui/components/cu-custom.vue'
//vuex是专为vue.js应用程序开发的状态管理模式。它采用集中存储管理应用的所有组件的状态
import store from './store'
//将Tabbar的四个子页面作为组件引入
import home from './pages/home/index.vue'
import news from './pages/news/index.vue'
import publish from './pages/publish/index.vue'
import platform from './pages/platform/index.vue'
import about from './pages/about/index.vue'
//访问API服务器的请求封装
import api from '@/common/insunHttp/'
//使用组件
Vue.component('cu-custom',cuCustom)
Vue.component('home',home)
Vue.component('news',news)
Vue.component('publish',publish)
Vue.component('platform',platform)
Vue.component('about',about)
//增加全局属性
Vue.prototype.$store = store
Vue.prototype.$insunapi = api
//有了Vue.config.productionTip = false这句代码，它会阻止你显示显示生产模式的消息
Vue.config.productionTip = false

/* 引入并被设置了一个mpType的属性值，其值为app。
这个值是为了与后面要讲的小程序页面组件所区分开来，
因为小程序页面组件和这个App.vue组件的写法和引入方式是一致的，
为了区分两者，需要设置mpType值。引入这个App.vue组件后，
会用它作为参数来创建一个Vue的实例，并调用$mount()方法加载。
下面是这个过程的关键代码行： */

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
