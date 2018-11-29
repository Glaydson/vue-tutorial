Vue.component("blog-post", {
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Aumentar fonte
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});

new Vue({
  el: "#blog-post-demo",
  data: {
    posts: [
      {
        id: 1,
        title: "Minha jornada com Vue",
        content: "Minha jornada foi maravilhosa"
      },
      { id: 2, title: "Postagens com Vue", content: "Vou fazer mil postagens" },
      {
        id: 3,
        title: "Porque Vue é tão divertido",
        content: "Me permite fazer tudo facilmente"
      }
    ],
    postFontSize: 1
  }
});
