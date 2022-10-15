const create = Vue.extend({
  template: `
  <div>
    <h1>这是一个标签</h1>  
  </div>
  `
})
const cpn = Vue.component(
  'cpn', create
)
const vue = new Vue({
  el: "#app",
})