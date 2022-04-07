import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import VueSocialSharing from 'vue-social-sharing'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue.use(VueSocialSharing, {
//     networks: {
//       fakeblock: 'https://fakeblock.com/share?url=@url&title=@title'
//     }
//   })
createApp(App).use(VueSocialSharing).mount('#app')


// import Vue from 'vue'
// import VueSocialSharing from '@/vue-social-sharing'

// import App from './App.vue'

// Vue.use(VueSocialSharing, {
//   networks: {
//     fakeblock: 'https://fakeblock.com/share?url=@url&title=@title'
//   }
// })

// new Vue({
//   el: '#app',
//   render: createElement => createElement(App)
// })