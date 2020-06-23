import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { GenreProvider } from './provider/genres'

ReactDOM.render(
    <GenreProvider>
        <App />
    </GenreProvider>
    ,document.getElementById('root')
);
