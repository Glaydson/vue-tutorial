Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'Minha jornada com Vue' },
      { id: 2, title: 'Postagens com Vue' },
      { id: 3, title: 'Porque Vue é tão divertido' }
    ]
  }
})