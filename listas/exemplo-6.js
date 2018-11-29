new Vue({
  el: '#v-for-pares',
  data: {
    numeros: [1, 2, 3, 4, 5]
  },
  methods: {
    pares: function (numeros) {
      return numeros.filter(function (numero) {
        return numero % 2 === 0
      })
    }
  }
})



