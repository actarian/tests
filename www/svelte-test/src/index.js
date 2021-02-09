
import '@babel/polyfill';
import App from './components/App.svelte';
import './styles.scss';

const app = new App({
  target: document.getElementById('app'),
  /*
  props: {
    name: 'Svelte',
  },
  */
});

export default app;
