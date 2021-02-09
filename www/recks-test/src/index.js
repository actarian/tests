import Recks from 'recks';
import { App } from './components/app';
import './styles.scss';

Recks.render(
  Recks.createElement(App, {}),
  document.getElementById('app')
);
