import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store';
import {Provider} from 'react-redux';
import { ModalProvider } from "react-modal-hook";

ReactDOM.render(
    <ModalProvider>
<Provider store={Store}>
<App />
</Provider>
</ModalProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();