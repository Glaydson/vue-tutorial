var vm = new Vue({
  el: "#demo",
  data: {
    primeiroNome: "Foo",
    ultimoNome: "Bar",
    nomeCompleto: "Foo Bar"
  },
  watch: {
    primeiroNome: function(val) {
      this.nomeCompleto = val + " " + this.ultimoNome;
    },
    ultimoNome: function(val) {
      this.nomeCompleto = this.primeiroNome + " " + val;
    }
  }
});
