import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import './styles.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
