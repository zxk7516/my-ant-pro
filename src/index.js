import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import regisServices from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
regisServices();