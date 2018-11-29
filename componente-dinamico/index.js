Vue.component('tab-home', { 
	template: '<div>Componente Home</div>' 
})
Vue.component('tab-posts', { 
	template: '<div>Componente Posts</div>' 
})
Vue.component('tab-arquivo', { 
	template: '<div>Componente Arquivo</div>' 
})

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Arquivo']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})