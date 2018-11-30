new Vue({
  el: '#example-4',
  methods: {
    alerta: function (mensagem, evento) {
      // agora temos acesso ao evento nativo
      if (evento) evento.preventDefault()
      alert(mensagem)
    }
  
  }
})
