import Vue from "vue";
import App from "./App.vue";
import VueFroala from 'vue-froala-wysiwyg'
// require('froala-editor/js/froala_editor.pkgd.min.js')
// require('froala-editor/css/froala_editor.pkgd.min.css')
// require('froala-editor/css/froala_style.min.css')
// const req = require.context('froala-editor/js/plugins/', false, /\.(js)$/i);
// req.keys().map(key => {
//     require(`froala-editor/js/plugins/${key.toString().slice(2)}`)
// });
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
//import all Froala plugins
import "froala-editor/js/plugins.pkgd.min.js";

Vue.use(VueFroala, {
  config: {
      key: "UBB7jD6G4H5I3B2C10aIVLEABVAYFKc1Ce1MYGD1c1NYVMiB3B9B6A5C2C4D3H3G3H3=="
  }
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
