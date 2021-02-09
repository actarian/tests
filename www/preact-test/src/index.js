import { h, render } from 'preact';
import App from './components/app';
import './styles.scss';

!h;

const element = document.getElementById('app');

render(<App />, element, element.lastChild);
