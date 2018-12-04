var vm = new Vue({
  el: "#example",
  data: {
    mensagem: "Olá Vue"
  },
  computed: {
    // uma função "getter" computada (computed getter)
    mensagemInvertida: function() {
      // `this` aponta para a instância Vue da variável `vm`
      return this.mensagem
        .split("")
        .reverse()
        .join("");
    }
  }
});
