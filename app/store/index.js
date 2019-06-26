import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: ""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store


/* 
状态管理有5个核心，分别是state、getter、mutation、action以及module。分别简单的介绍一下它们：
1、state
        state为单一状态树，在state中需要定义我们所需要管理的数组、对象、字符串等等，
只有在这里定义了，在vue.js的组件中才能获取你定义的这个对象的状态。
2、getter
        getter有点类似vue.js的计算属性，当我们需要从store的state中派生出一些状态，
那么我们就需要使用getter，getter会接收state作为第一个参数，而且getter的返回值会根据
它的依赖被缓存起来，只有getter中的依赖值（state中的某个需要派生状态的值）发生改变的时
候才会被重新计算。
3、mutation
        更改store中state状态的唯一方法就是提交mutation，就很类似事件。每个mutation
都有一个字符串类型的事件类型和一个回调函数，我们需要改变state的值就要在回调函数中改变。
我们要执行这个回调函数，那么我们需要执行一个相应的调用方法：store.commit。
4、action
        action可以提交mutation，在action中可以执行store.commit，而且action中可以
有任何的异步操作。在页面中如果我们要嗲用这个action，则需要执行store.dispatch
5、module
        module其实只是解决了当state中很复杂臃肿的时候，module可以将store分割成模块，
每个模块中拥有自己的state、mutation、action和getter。

 */