import React,  {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ContextProvider} from './Context/ContextProvider';
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading...</div>)}>
      <ContextProvider>
        <App />
      </ContextProvider>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
