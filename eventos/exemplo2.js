var example2 = new Vue({
  el: '#example-2',
  data: {
    nome: 'Vue.js'
  },
  // define métodos dentro do objeto `methods`
  methods: {
    cumprimentar: function (evento) {
      // `this` dentro de métodos aponta para a instância Vue
      alert('Olá ' + this.nome + '!')
      // `event` é o evento DOM nativo
      if (evento) {
        alert(evento.target.tagName)
      }
    }
  }
})
