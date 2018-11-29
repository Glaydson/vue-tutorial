new Vue({
  el: '#v-for-pares',
  data: {
    numeros: [1, 2, 3, 4, 5]
  },
  computed: {
    numerosPares: function () {
      return this.numeros.filter(function (numero) {
        return numero % 2 === 0
      })
    }
  }
})



