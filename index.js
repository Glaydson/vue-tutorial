var app = new Vue({
  el: '#app',
  data: {
    mensagem: "Ola Mundo!"
  }
})
app.mensagem = "Mensagem alterada!"

var app2 = new Vue({
  el: '#app-2',
  data: {
    mensagem: 'Você carregou esta página em ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    vendo: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    tarefas: [
      { texto: 'Aprender JavaScript' },
      { texto: 'Aprender Vue' },
      { texto: 'Construir algo fantástico' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    mensagem: 'Olá Vue.js!'
  },
  methods: {
    inverteMensagem: function () {
      this.mensagem = this.mensagem.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    mensagem: 'Olá Vue!'
  }
})