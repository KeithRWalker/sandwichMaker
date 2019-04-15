import store from './components/store.js';
import btnEvents from './helpers/btnEvents.js';
const init = () => {
    store.makeIngList();
    btnEvents.addEvents();
};

init();