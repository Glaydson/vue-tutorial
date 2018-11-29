Vue.component('item-tarefa', {
  props: ['tarefa'],
  template: '<li>{{ tarefa.texto }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    listaCompras: [
      { id: 0, texto: 'Vegetais' },
      { id: 1, texto: 'Queijo' },
      { id: 2, texto: 'Carne' }
    ]
  }
})
