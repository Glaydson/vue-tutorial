Vue.component('nome-usuario', {
  props: ['nome'],
  template: '<p>Olá {{ nome }}</p>'
})
new Vue({
  el: '#app'
})
