import Vue from 'vue';
import App from './App.vue';

// Глобальная регистрация компонентов. Компонент можно будет исп-ть где угодно

import AppStartScreen from './components/StartScreen.vue';
import AppQuestion from './components/Question.vue';
import AppMessage from './components/Message.vue';
import AppResultScreen from './components/ResultScreen.vue';

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMessage', AppMessage);
Vue.component('AppResultScreen', AppResultScreen);

new Vue({
  el: '#app',
  render: h => h(App)
})
