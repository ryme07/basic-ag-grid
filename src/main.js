import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ag-grid-enterprise';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
// import { ModuleRegistry } from '@ag-grid-community/core'; 


Vue.config.productionTip = false

// ModuleRegistry.registerModules([ClientSideRowModelModule, RangeSelectionModule]);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
