import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Left from './left';
import Inputes from './redux/store';
import Right from './right';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex'>
      <Provider store={Inputes}>
      <App />
      <Left/>
      <Right/>



      </Provider>
    </div>
  </React.StrictMode>
);

