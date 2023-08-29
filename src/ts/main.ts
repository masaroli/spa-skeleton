// Import Base file
import { registerSW } from 'virtual:pwa-register';
import 'virtual:svg-icons-register';

// Import SCSS
import '/scss/site.scss';

// Import Libraries
import './libs/smoothScroll';
import './libs/modal';

// Register SW
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('onNeedRefresh');
  },
  onOfflineReady() {
    console.log('onOfflineReady');
  },
});

void updateSW();
