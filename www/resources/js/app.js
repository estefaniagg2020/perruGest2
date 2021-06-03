require('./bootstrap');
window.Vue = require("vue").default;

require('@coreui/coreui/dist/js/coreui.bundle.min');

Vue.component(
  "customer-component",
  require("./components/CustomerComponent.vue").default
);