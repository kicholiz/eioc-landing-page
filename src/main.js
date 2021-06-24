import { createApp } from 'vue';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faEnvelope);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');