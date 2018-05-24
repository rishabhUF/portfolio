import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import "tachyons-word-break";
 


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();