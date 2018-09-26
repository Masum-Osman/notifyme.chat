
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vuetify from 'vuetify'

 
Vue.use(Vuetify)

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('Chat', require('./components/Chat.vue'));
Vue.component('PrivateChat', require('./components/PrivateChat.vue'));
const app = new Vue({
    el: '#app'
});
