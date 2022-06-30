import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/main.css'
import App from './App';
import { QuestionsProvider } from './contexts/QuestionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <QuestionsProvider>
    <App />
  </QuestionsProvider>
  // </React.StrictMode>
);
