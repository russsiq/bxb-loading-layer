# bxb-loading-layer
Vue.js component [loading layer] from [BixBite](https://github.com/russsiq/bixbite).

### Installation

Download library or can be installed as `npm` package:
```console
npm i bxb-loading-layer --save-dev
```

### Getting started

To start using `bxb-loading-layer`, you need to do is plugin installation. Somewhere in your main app.js file:
```js
// Import components to Vue application as plugins.
import Loading from 'bxb-loading-layer';

// Install plugins to Vue application.
Vue.use(Loading);

// Create a fresh Vue application instance and attach it to the page.
const app = new Vue({
    el: '#app'
});

// Make some vue plugins methods to global.
window.LoadingLayer = app.$loading;
```

### Usage and API

There are one methods for calling loader (show) and one for dismiss them (hide):
```js
let loader = LoadingLayer.show({active: true});

// Logic of you app, example: fetch data from api by axios.
...

loader.hide();
```

### Лицензия

bxb-loading-layer - программное обеспечение с открытым исходным кодом, распространяющееся по лицензии [MIT license](https://choosealicense.com/licenses/mit/).
