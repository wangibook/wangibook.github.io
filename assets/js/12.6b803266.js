(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{207:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue文档","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue文档")]),t._v(" "),e("h2",{attrs:{id:"_1、说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、说说你对-spa-单页面的理解，它的优缺点分别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、说说你对 SPA 单页面的理解，它的优缺点分别是什么？")]),t._v(" "),e("p",[t._v("SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。")]),t._v(" "),e("h3",{attrs:{id:"优点："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点：","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),e("ul",[e("li",[t._v("用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；")]),t._v(" "),e("li",[t._v("基于上面一点，SPA 相对对服务器压力小；")]),t._v(" "),e("li",[t._v("前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；")])]),t._v(" "),e("h3",{attrs:{id:"缺点："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点：","aria-hidden":"true"}},[t._v("#")]),t._v(" 缺点：")]),t._v(" "),e("ul",[e("li",[t._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),t._v(" "),e("li",[t._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),t._v(" "),e("li",[t._v("SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])]),t._v(" "),e("h2",{attrs:{id:"_2、谈谈你对-vue-生命周期的理解？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、谈谈你对-vue-生命周期的理解？","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、谈谈你对 Vue 生命周期的理解？")]),t._v(" "),e("h3",{attrs:{id:"（1）生命周期是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）生命周期是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" （1）生命周期是什么？")]),t._v(" "),e("p",[t._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")]),t._v(" "),e("h3",{attrs:{id:"（2）各个生命周期的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）各个生命周期的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" （2）各个生命周期的作用")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("生命周期")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeCreate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例被创建之初，组件的属性生效之前")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("created")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeMount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("mounted")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeUpdate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("update")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之后")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("activited")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 专属，组件被激活时调用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("deadctivated")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 专属，组件被销毁时调用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeDestory")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件销毁前调用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("destoryed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件销毁后调用")])])])]),t._v(" "),e("h3",{attrs:{id:"（3）生命周期示意图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（3）生命周期示意图","aria-hidden":"true"}},[t._v("#")]),t._v(" （3）生命周期示意图")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/111.webp",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_3、组件中-data-为什么是一个函数？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、组件中-data-为什么是一个函数？","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、组件中 data 为什么是一个函数？")]),t._v(" "),e("blockquote",[e("p",[t._v("为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmessage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"子组件"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tchildName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new Vue")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<App/>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。")]),t._v(" "),e("h2",{attrs:{id:"_4、vue-组件间通信有哪几种方式？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、vue-组件间通信有哪几种方式？","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、Vue 组件间通信有哪几种方式？")]),t._v(" "),e("p",[t._v("Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。")]),t._v(" "),e("h4",{attrs:{id:"（1）props-emit-适用-父子组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）props-emit-适用-父子组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" （1）props / $emit 适用 父子组件通信")]),t._v(" "),e("h4",{attrs:{id:"（2）ref-与-parent-children-适用-父子组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）ref-与-parent-children-适用-父子组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" （2）ref 与 $parent / $children 适用 父子组件通信")]),t._v(" "),e("ul",[e("li",[t._v("ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例")]),t._v(" "),e("li",[t._v("$parent / $children：访问父 / 子实例")])]),t._v(" "),e("h4",{attrs:{id:"（3）eventbus-（-emit-on）-适用于-父子、隔代、兄弟组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（3）eventbus-（-emit-on）-适用于-父子、隔代、兄弟组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" （3）EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信")]),t._v(" "),e("p",[t._v("这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。")]),t._v(" "),e("h4",{attrs:{id:"（4）-attrs-listeners-适用于-隔代组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（4）-attrs-listeners-适用于-隔代组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" （4）$attrs/$listeners 适用于 隔代组件通信")]),t._v(" "),e("ul",[e("li",[t._v('$attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。')]),t._v(" "),e("li",[t._v('$listeners：包含了父作用域中的 (不含 .native 修饰器的)  v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件')])]),t._v(" "),e("h4",{attrs:{id:"（5）provide-inject-适用于-隔代组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（5）provide-inject-适用于-隔代组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" （5）provide / inject 适用于 隔代组件通信")]),t._v(" "),e("p",[t._v("祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。")]),t._v(" "),e("h4",{attrs:{id:"（6）vuex-适用于-父子、隔代、兄弟组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（6）vuex-适用于-父子、隔代、兄弟组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" （6）Vuex 适用于 父子、隔代、兄弟组件通信")]),t._v(" "),e("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。")]),t._v(" "),e("ul",[e("li",[t._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),e("li",[t._v("改变 store 中的状态的唯一途径就是显式地提交  (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。")])]),t._v(" "),e("h2",{attrs:{id:"_5、computed-和-watch-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、computed-和-watch-区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、computed 和 watch 区别")]),t._v(" "),e("h4",{attrs:{id:"（1）、computed-是计算属性，依赖其他属性计算值，并且-computed-的值有缓存，只有当计算值变化才会返回内容。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）、computed-是计算属性，依赖其他属性计算值，并且-computed-的值有缓存，只有当计算值变化才会返回内容。","aria-hidden":"true"}},[t._v("#")]),t._v(" （1）、computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。")]),t._v(" "),e("h4",{attrs:{id:"（2）、watch-监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）、watch-监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。","aria-hidden":"true"}},[t._v("#")]),t._v(" （2）、watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("一般来说需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch。")])]),t._v(" "),e("h2",{attrs:{id:"_6、组件中-data-什么时候可以使用对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、组件中-data-什么时候可以使用对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、组件中 data 什么时候可以使用对象")]),t._v(" "),e("p",[t._v("组件复用时所有组件实例都会共享 data，如果 data 是对象的话，就会造成一个组件修改 data 以后会影响到其他所有组件，所以需要将 data 写成函数，每次用到就调用一次函数获得新的数据。")]),t._v(" "),e("p",[t._v("当我们使用 new Vue() 的方式的时候，无论我们将 data 设置为对象还是函数都是可以的，因为 new Vue() 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了。")]),t._v(" "),e("h2",{attrs:{id:"_7、对vuex的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、对vuex的理解","aria-hidden":"true"}},[t._v("#")]),t._v(" 7、对vuex的理解")]),t._v(" "),e("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。")]),t._v(" "),e("h4",{attrs:{id:"（1）vuex-的状态存储是响应式的。当-vue-组件从-store-中读取状态的时候，若-store-中的状态发生变化，那么相应的组件也会相应地得到高效更新。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）vuex-的状态存储是响应式的。当-vue-组件从-store-中读取状态的时候，若-store-中的状态发生变化，那么相应的组件也会相应地得到高效更新。","aria-hidden":"true"}},[t._v("#")]),t._v(" （1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),e("h4",{attrs:{id:"（2）改变-store-中的状态的唯一途径就是显式地提交-commit-mutation。这样使得我们可以方便地跟踪每一个状态的变化。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）改变-store-中的状态的唯一途径就是显式地提交-commit-mutation。这样使得我们可以方便地跟踪每一个状态的变化。","aria-hidden":"true"}},[t._v("#")]),t._v(" （2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。")]),t._v(" "),e("p",[t._v("主要包括以下几个模块：")]),t._v(" "),e("ul",[e("li",[t._v("State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。")]),t._v(" "),e("li",[t._v("Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。")]),t._v(" "),e("li",[t._v("Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。")]),t._v(" "),e("li",[t._v("Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。")]),t._v(" "),e("li",[t._v("Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);