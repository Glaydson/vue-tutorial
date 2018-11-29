Vue.component("alert-box", {
  template: `
    <div class="demo-alert-box">
      <strong>Erro!</strong>
      <slot></slot>
    </div>
  `
});

new Vue({
  el: "#alert-box-demo"
});
