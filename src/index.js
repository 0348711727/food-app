import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from './TranslatationService/i18Translate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18next={i18next} >
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
